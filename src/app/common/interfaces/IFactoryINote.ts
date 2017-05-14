import {INote, INoteImage} from '../../interfaces/inote';
export class FactoryNote implements INote{

  id: number;
  icon: string;
  region: string;
  header: string;
  date: string;
  body: string;
  shortBody: string;
  images: INoteImage[];


  public constructor(
  icon: string,
  region: string,
  header: string,
  date: string,
  body: string,
  shortBody: string = null,
  images: INoteImage[]
  ){
    this.icon = icon;
    this.region = icon;
    this.header = header;
    this.date = date;
    this.body = body;
    this.shortBody = shortBody;
    this.images = [];
  }

}
