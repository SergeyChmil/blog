import {Directive, Input} from '@angular/core';
import {INote} from '../interfaces/inote';

@Directive({
  selector: '[appNoteContextPicker]'
})
export class NoteContextPickerDirective {
  @Input() notePicker:INote;
  constructor() {

  }

}
