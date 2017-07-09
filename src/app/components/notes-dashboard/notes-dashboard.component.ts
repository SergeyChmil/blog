import {Component, OnInit, Output, Input} from '@angular/core';
import {DataService} from '../../services/data.service';
import {INote, ICity} from '../../interfaces/inote';
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

  @Input() public notes$: Note[];
  @Input() public cities$: ICity[];

  @Output() public notesConnector: Subject<number> = new Subject();

  // @Input() public selectedRegion: number;

  constructor(private _sharedService: SharedService) {
    // console.log('Notes Dashboard')
    // console.log(this.notes$)

    // this._dataService.getCitiesAPI().subscribe((cities:ICity[]) =>{
    //   this.cities$ = <ICity[]>cities;
    //   // console.log(this.cities$)
    // });
    //
    // this._dataService.getNotesAPI().subscribe((notes: INote[]) => {
    //   this.notes$ = <Note[]>notes;
    //   // console.log(this.notes$)
    // });



    // this._sharedService.modalCreatePostProvider.subscribe(note => {
    //   this._dataService.createNote(note).subscribe(
    //     data => {},
    //     error => console.log('Notes Dashboard component error')
    //   );
    // });
    //
    this._sharedService.activeNoteProvider.subscribe(id => {
      this.focusOnClickedItem(id);
    });
    //
    // this._sharedService.deletePostProvider.subscribe(note =>{
    //   this._dataService.deleteNote(note.pk).subscribe(
    //     data => {},
    //     error => console.log('Notes Dashboard: Deleting post error')
    //   );
    // });
  }

  getCityName(cityIndex:number){
    // if(!cityIndex) return;
    // console.log('GET CITIES')
    // console.log(cityIndex)
    let city:ICity = this.cities$.find(x => x.pk === cityIndex);
    // console.log(city.name)
    return city.name;
  }

  focusOnClickedItem(pId: number) {
    if (pId >= 0) {

      ////надо добавить плавный скролл к полученным координатам
      setTimeout(function () {
        let element = document.getElementById(`note${pId}`);
        let header = document.getElementById(`header${pId}`);
        // console.log(header);
        (window.scrollTo(0, element.offsetTop + header.offsetTop ));
      }.bind(this),200)


    }
  }

}
