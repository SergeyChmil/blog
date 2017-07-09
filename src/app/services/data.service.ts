import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {INote, IRegion, ICity} from '../interfaces/inote';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Note} from '../classes/Note';

@Injectable()
export class DataService {

  constructor(private _http: Http,
              @Inject('dataURL') private _dataURL: string,
              @Inject('menuKey') private _menuKey: string,
              @Inject('cityKey') private _cityKey: string,
              @Inject('notesKey') private _notesKey: string) {
  }

  public getNotesAPI(region:number): Observable<INote[]> {
    return this._http.get(`${this._dataURL}${this._notesKey}?region=${region}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'DataService server error, getNotesApi'));
  }

  public getMenuAPI(): Observable<IRegion[]> {
    return this._http.get(`${this._dataURL}${this._menuKey}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'DataService server error, getMenuAPI'));
  }

  public uploadImage(image:any): Observable<any> {
    console.log('upload file');
    console.log(image);
    return this._http.post(`${this._dataURL}upload_images/`, image)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'DataService server error, getMenuAPI'));
  }

  public getCitiesAPI():Observable<ICity[]>{
    return this._http.get(`${this._dataURL}${this._cityKey}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'DataService server error, getCitiesAPI'));
  }

  public createNote(note:INote):Observable<any>{
    return this._http.post(`${this._dataURL}${this._notesKey}`, note)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "DataService server error, createNote"));
  }

  public deleteNote(noteId:number):Observable<any>{
    // console.log("DELETE POST SERVICE")
    // console.log(postId)
    // console.log(`${this._dataURL}${this._notesKey}${postId}`)
    return this._http.delete(`${this._dataURL}${this._notesKey}${noteId}`)
      .catch((error:any) => Observable.throw(error.json().error || "DataService server error, deleteNote"));
  }

}
