import {INote, INoteImage} from '../../interfaces/inote';
export class FactoryNote implements INote{

  pk: number;
  city: string;
  region: number;
  name: string;
  publication_date: string;
  body: string;
  // shortBody: string;
  images: INoteImage[];


  public constructor(
  icon: string,
  region: number,
  name: string,
  publication_date: string,
  body: string,
  // shortBody: string = null,
  images: INoteImage[]
  ){
    this.city = icon;
    this.region = region;
    // this.region = 0;
    this.name = name;
    this.publication_date = publication_date;
    this.body = body;
    // this.shortBody = shortBody;
    this.images = [];
  }

}
