import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {INote} from '../../interfaces/inote';
import {Subject} from 'rxjs';
import {environment} from '../../../environments/environment';
import {SharedService} from '../../services/shared.service';
import {ModalAddPost} from '../modal-add-post/modal-add-post.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() private _context:INote;
  @Input() private _connector:Subject<any>;
  @Input() private _icon:string;
  // @Input() private _animator:Subject<any>;

  public isActive:boolean;
  public ctaBtnText: string = "Читать далее";
  public state:string = 'inactive';
  public order:number;
  // public icon:string;

  public onClick(){
    this._connector.next(this._context.pk);
  }

  constructor(private _sharedService:SharedService) { }

  ngOnInit() {
    this._connector.subscribe(data =>{
      this.checkClickedItem(data);
    });
    this.order = this._context.pk + 1;

    console.log(this._context)
  }

  public checkClickedItem(id:number, ){
    if(this._context.pk == id){
      this.order = 0;
      this.isActive = true;
      this.state = 'active';
      setTimeout((function () {
        this._sharedService.activeNoteProvider.next(id);
      }).bind(this),20);
    }
    else{
      this.order = this._context.pk + 1;
      this.isActive = false;
      this.state = 'inactive';
    }
  }

  public getIconClass(){
    let iconName = this._icon;
    // console.log('GET ICON CLASS')
    // console.log(iconName)
    // return {[iconName]:true};
    return {[this._icon]:true}
  }

  //ToDo сделать класс, собирающий в себя все вызовы модальных окон
  onDeleteClick(){
    this._sharedService.deletePostActivator.next(this._context);
  }

  onEditClick(){
    console.log(this._context);
    this._sharedService.editPostActivator.next(this._context);
  }

}
