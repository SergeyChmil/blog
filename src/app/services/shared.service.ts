import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {INote} from '../interfaces/inote';
import {Note} from '../classes/Note';

@Injectable()
export class SharedService {

  public modalConnector: Subject<string> = new Subject();
  public modalCreatePostProvider: Subject<Note> = new Subject();
  public windowWidthProvider: Subject<number> = new Subject();
  public activeNoteProvider: Subject<number> = new Subject();
  public deletePostActivator: Subject<INote> = new Subject();
  public deletePostProvider: Subject<INote> = new Subject();

  constructor() {

  }

}
