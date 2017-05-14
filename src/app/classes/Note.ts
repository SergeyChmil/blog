import {INote, INoteImage} from '../interfaces/inote';

export class Note implements INote{

  public id:number;
  public icon:string;
  public region:string;
  public header:string;
  public date:string;
  public body:string;
  public shortBody:string;
  public images:INoteImage[];


  public constructor(){}


  // get id(): number {
  //   return this._id;
  // }
  //
  // get icon():string{
  //   return this._icon;
  // }
  //
  // get header():string{
  //   return this._header;
  // }
  //
  // get date():string{
  //   return this._date;
  // }
  //
  // get body():string{
  //   return this._body;
  // }
  //
  // get shortBody():string{
  //   if(this._shortBody) return this._shortBody;
  // }
  //
  // get images():INoteImage[]{
  //   if(this._images) return this._images;
  // }
}
