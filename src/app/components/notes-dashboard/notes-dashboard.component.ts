import {Component, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';
import {INote} from '../../interfaces/inote';
import {Subject} from 'rxjs';
import {SharedService} from '../../services/shared.service';
import {animate, transition, style, state, trigger} from '@angular/animations';
import {Note} from '../../classes/Note';

@Component({
  selector: 'app-notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.css'],
  animations: [
    trigger('noteExpand', [
      state('inactive', style({
        width: '*'
      })),
      state('active', style({
        width: '100%'
      })),
      transition('inactive => active', animate('150ms ease-in')),
      transition('active => inactive', animate('150ms ease-out'))
    ])
  ]
})
export class NotesDashboardComponent {

  public notes$: Note[];

  @Output()
  public notesConnector: Subject<number> = new Subject();

  constructor(private _dataService: DataService, private _sharedService: SharedService) {

    this._dataService.getNotesAPI().subscribe((notes: INote[]) => {
      this.notes$ = <Note[]>notes;
    });

    this._sharedService.modalCreatePostProvider.subscribe(note => {
      this._dataService.createPost(note).subscribe(
        data => {},
        error => console.log('Notes Dashboard component error')
      );
    });

    this._sharedService.activeNoteProvider.subscribe(id => {
      this.focusOnClickedItem(id);
    });

    this._sharedService.deletePostProvider.subscribe(note =>{
      this._dataService.deletePost(note.id).subscribe(
        data => {},
        error => console.log('Notes Dashboard: Deleting post error')
      );
    });
  }

  focusOnClickedItem(pId: number) {
    if (pId >= 0) {

      ////надо добавить плавный скролл к полученным координатам
      setTimeout(function () {
        let element = document.getElementById(`note${pId}`);
        let header = document.getElementById(`header${pId}`);
        console.log(header);
        (window.scrollTo(0, element.offsetTop + header.offsetTop ));
      }.bind(this),200)


    }
  }

}
