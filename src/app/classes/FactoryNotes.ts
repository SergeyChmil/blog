import {Note} from './Note';

export default class FactoryNotes{

  public getNote(obj:any):Note{

    let newNote:Note = {
      pk:null,
      city: null,
      region: null,
      name: 'default',
      publication_date: 'default',
      body: 'default',
      images: 'default'
    };

    if(obj.pk) newNote.pk = obj.pk;
    if(obj.city) newNote.city = obj.city;
    if(obj.region) newNote.region = obj.region;
    if(obj.name) newNote.name = obj.name;
    if(obj.date) newNote.publication_date = obj.publication_date;
    if(obj.body) newNote.body = obj.body;
    if(obj.images) newNote.images = obj.images;

    return newNote;
  }
}
