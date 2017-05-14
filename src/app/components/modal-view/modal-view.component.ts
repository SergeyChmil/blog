import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {INote, IIcons} from '../../interfaces/inote';
import {FactoryNote} from '../../common/interfaces/IFactoryINote';
import FactoryNotes from '../../classes/FactoryNotes';
import {Observable, Observer} from 'rxjs';
import {Note} from '../../classes/Note';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css']
})
export class ModalViewComponent implements OnInit {

  private _icons: IIcons = {
    china: [],
    world: []
  };

  public region: string = '';

  constructor(private _sharedService: SharedService, private _dataService: DataService) {
    this._dataService.getIconsAPI().subscribe((icons: IIcons) => {
      this._icons = icons;
      console.log(icons)
    });
  }

  onCancelClick(): void {
    this._sharedService.modalConnector.next('modal close');
  }

  choseRegion(reg: any) {
    this._icons.china.indexOf(reg) > -1 ? this.region = 'china' : this.region = 'world';
  }

  onSendClick(pHeader, pPost): void {
    //создается новая заметка по шаблону
    let factory: FactoryNotes = new FactoryNotes();
    let data = {header: pHeader, body: pPost, region: this.region};
    let note: Note = factory.getNote(data);

    this._sharedService.modalCreatePostProvider.next(note);
    this._sharedService.modalConnector.next('modal close');

  }

  ngOnInit() {
    console.log(this._icons)
  }

}
