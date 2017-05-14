import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {INote, IIcons} from '../interfaces/inote';
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
              @Inject('iconsKey') private _iconsKey: string,
              @Inject('notesKey') private _notesKey: string) {
  }

  public getNotesAPI(): Observable<INote[]> {
    return this._http.get(`${this._dataURL}${this._notesKey}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'DataService server error, getNotesApi'));
  }

  public getMenuAPI(): Observable<String[]> {
    return this._http.get(`${this._dataURL}${this._menuKey}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'DataService server error, getMenuAPI'));
  }

  public getIconsAPI():Observable<IIcons>{
    return this._http.get(`${this._dataURL}${this._iconsKey}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'DataService server error, getIconsAPI'));
  }

  public createPost(note:Note):Observable<any>{
    return this._http.post(`${this._dataURL}${this._notesKey}`, note)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "DataService server error, createPost"));
  }

  public deletePost(postId:number):Observable<any>{
    return this._http.delete(`${this._dataURL}${this._notesKey}${postId}`)
      .catch((error:any) => Observable.throw(error.json().error || "DataService server error, deletePost"));
  }

}
