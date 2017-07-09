import { Component, OnInit } from '@angular/core';
import {INote} from '../../interfaces/inote';
import FactoryNotes from '../../classes/FactoryNotes';
import {SharedService} from '../../services/shared.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: 'modal-delete-post.component.html',
  styleUrls: ['modal-delete-post.component.css']
})
export class ModalDeletePost implements OnInit {

  constructor(private _sharedService:SharedService, private _dataService:DataService) { }

  ngOnInit() {
    // console.log(this)
  }

  onCancelClick(note:any):void{
    // send signal to common.modal.component.ts
    this._sharedService.modelCloseProvider.next('modal close');

    // console.log(note)
  }

  onDeletePostClick(note:INote){
    // send signal to the main app
    this._sharedService.deletePostProvider.next(note);
    // send signal to common.modal.component.ts
    this._sharedService.modelCloseProvider.next('modal close');
  }

}
