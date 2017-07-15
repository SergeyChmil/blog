import {INote, INoteImage} from '../../interfaces/inote';
export class FactoryNote implements INote{

  pk: number;
  city: number;
  region: number;
  name: string;
  publication_date: string;
  body: string;
  // shortBody: string;
  images: string;


  public constructor(
  icon: number,
  region: number,
  name: string,
  publication_date: string,
  body: string,
  // shortBody: string = null,
  images: string
  ){
    this.city = icon;
    this.region = region;
    // this.region = 0;
    this.name = name;
    this.publication_date = publication_date;
    this.body = body;
    // this.shortBody = shortBody;
    this.images = images;
  }

}
