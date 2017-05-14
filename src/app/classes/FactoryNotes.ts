import {Note} from './Note';

export default class FactoryNotes{

  public getNote(obj:any):Note{

    let newNote:Note = {
      id:null,
      icon: 'default',
      region: 'default',
      header: 'default',
      date: 'default',
      body: 'default',
      shortBody: 'default',
      images: []
    };

    if(obj.id) newNote.id = obj.id;
    if(obj.icon) newNote.icon = obj.icon;
    if(obj.region) newNote.region = obj.region;
    if(obj.header) newNote.header = obj.header;
    if(obj.date) newNote.date = obj.date;
    if(obj.body) newNote.body = obj.body;
    if(obj.shortBody) newNote.shortBody = obj.shortBody;
    if(obj.images) newNote.images = obj.images;

    return newNote;
  }
}
