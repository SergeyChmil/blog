import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataService} from './services/data.service';
import 'rxjs/add/observable/of';
import {INote, INoteImage, IRegion, ICity} from './interfaces/inote';
import {ModalService} from './common/services/modal.service';
import {ModalAddPost} from './components/modal-add-post/modal-add-post.component';
import {SharedService} from './services/shared.service';
import {ModalDeletePost} from './components/modal-delete-post/modal-delete-post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public selectedRegionIndex: number;
  public selectedRegion: number;
  public regions$: IRegion[];
  public cities$: ICity[];
  public notes$: INote[];

  public constructor(private _dataService: DataService, private _modalService:ModalService, private _sharedService:SharedService) {

    this._dataService.getMenuAPI().subscribe((regions: IRegion[]) => {
      this.regions$ = regions;
      this.selectedRegionIndex = 0;
      this.selectedRegion = this.regions$[this.selectedRegionIndex].pk;
      this.loadNotes();
    });

    this._dataService.getCitiesAPI().subscribe((cities: ICity[]) => {
      this.cities$ = cities;
    });

    //Открывает модальное окно удаления
    this._sharedService.deletePostActivator.subscribe(context => {
      this.openDeleteModal(context);
    });

    //Получает ответ от модального окна удаления
    this._sharedService.deletePostProvider.subscribe(note =>{
      this.deleteNote(note);
    });

    this._sharedService.editPostActivator.subscribe(note =>{
      // console.log('Edit post activator')
      // console.log(note)
      this.openAddModal(note);
    });

    this._sharedService.deleteImageActivator.subscribe(link =>{
      console.log('Delete image activator')
      console.log(link)
      this._dataService.deleteImage(link);
    });

    this._sharedService.editPostProvider.subscribe(note =>{
      this.editNote(note);
    })

    this._sharedService.modalCreatePostProvider.subscribe(note =>{
      this.createNote(note);
    })
  }

  onMenuClickHandler(index:number){
    this.selectedRegionIndex = index;
    this.selectedRegion = this.regions$[index].pk;
    this.loadNotes();
  }

  loadNotes(){
    this._dataService.getNotesAPI(this.selectedRegion).subscribe((notes:INote[]) => {
      this.notes$ = notes;
    });
  }

  createNote(note:INote){
    this._dataService.createNote(note).subscribe(
      data =>{ this.loadNotes();},
      error => console.log('Notes Dashboard: Create post error')
    )
  }

  deleteNote(note:INote){
    this._dataService.deleteNote(note.pk).subscribe(
      data =>{ this.loadNotes();},
      error => console.log('Notes Dashboard: Delete post error')
    );
  }

  editNote(note:INote){
    this._dataService.editNote(note).subscribe(
      data =>{ this.loadNotes();},
      error => console.log('Notes Dashboard: Edit post error')
    )
  }

  ngOnInit(){
    // this.calculateWindowWidth();
  }

  // public getCurrentRegion(){
  //   if(!this.regions$) return
  //   return this.regions$[this.selectedRegion].pk;
  // }

  // public onSelectMenuItem(index:number):void{
  //
  //   this.selectedRegion = index;
  //   // console.log(this.selectedRegion )
  // }



  /// Работа с модальными окнами
  public openAddModal(note:INote):void{
    // let param:any[]
    console.log('EDIT NOTE')
    console.log(note)
    this._modalService.open({
      component: ModalAddPost,
      context:{note},
      params:this.cities$
    });
  }

  public openDeleteModal(note:INote):void{
    this._modalService.open({
      component: ModalDeletePost,
      context:{note},
      params: null
    });
  }

  //Помечена к удалению.
  public calculateWindowWidth(){
      let windowWidth = (window.innerWidth);
      // this._sharedService.windowWidthProvider.next(windowWidth);
  }

}

