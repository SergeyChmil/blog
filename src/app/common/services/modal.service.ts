import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs';

@Injectable()
export class ModalService {

  private _modalSequence$$: Subject<any> = new Subject();

  public open(component: {component:any, context:any}):void{
    console.log('service open')
    this._modalSequence$$.next(component)
  }

  public get modalSequence$$():Observable<any>{
    return this._modalSequence$$.asObservable();
  }

}
