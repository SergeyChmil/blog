import { Component, OnInit } from '@angular/core';
import {INote} from '../../interfaces/inote';
import FactoryNotes from '../../classes/FactoryNotes';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {

  // private _context:INote;
  constructor(private _sharedService:SharedService) { }

  ngOnInit() {
    // console.log(this)
  }

  onCancelClick():void{
    this._sharedService.modalConnector.next('modal close');
  }

  onDeletePostClick(note:INote){
    this._sharedService.deletePostProvider.next(note);
    this._sharedService.modalConnector.next('modal close');
  }

}
