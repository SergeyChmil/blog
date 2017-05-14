import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataService} from './services/data.service';
import 'rxjs/add/observable/of';
import {INote, INoteImage} from './interfaces/inote';
import {ModalService} from './common/services/modal.service';
import {ModalViewComponent} from './components/modal-view/modal-view.component';
import {SharedService} from './services/shared.service';
import {ModalDialogComponent} from './components/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public selectedMenuItem: number;
  public lists$: String[];

  public constructor(private _dataService: DataService, private _modalService:ModalService, private _sharedService:SharedService) {
    this.selectedMenuItem = 0;

    this._dataService.getMenuAPI().subscribe((menuItems: String[]) => {
      this.lists$ = menuItems;
    });

    this._sharedService.deletePostActivator.subscribe(context => {
      this.openDeleteModal(context);
    });
  }

  ngOnInit(){
    // this.calculateWindowWidth();
  }

  public onSelectMenuItem(index:number):void{
    this.selectedMenuItem = index;
  }

  public openBlankModal(note:INote = null):void{
    this._modalService.open({
      component: ModalViewComponent,
      context:{note}
    });
  }

  public openDeleteModal(pContext:INote):void{
    this._modalService.open({
      component: ModalDialogComponent,
      context:{pContext}
    });
  }

  //Помечена к удалению.
  public calculateWindowWidth(){
      let windowWidth = (window.innerWidth);
      // this._sharedService.windowWidthProvider.next(windowWidth);
  }

}

