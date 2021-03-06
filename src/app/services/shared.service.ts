import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {INote} from '../interfaces/inote';
import {Note} from '../classes/Note';

@Injectable()
export class SharedService {

  public modelCloseProvider: Subject<string> = new Subject();
  public modalCreatePostProvider: Subject<Note> = new Subject();
  public windowWidthProvider: Subject<number> = new Subject();
  public activeNoteProvider: Subject<number> = new Subject();
  public deletePostActivator: Subject<INote> = new Subject();
  public editPostActivator: Subject<INote> = new Subject();
  public deleteImageActivator: Subject<string> = new Subject();
  public deletePostProvider: Subject<INote> = new Subject();
  public editPostProvider: Subject<INote> = new Subject();

  constructor() {

  }

}
