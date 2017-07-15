import {INote, INoteImage} from '../interfaces/inote';

export class Note implements INote{

  public pk:number;
  public city:number;
  public region:number;
  public name:string;
  public publication_date:string;
  public body:string;
  // public shortBody:string;
  public images:string;


  public constructor(){}


  // get pk(): number {
  //   return this._id;
  // }
  //
  // get city():string{
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
