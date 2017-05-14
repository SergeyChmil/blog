import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {DataService} from './services/data.service';
import {environment} from '../environments/environment';
import { NotesDashboardComponent } from './components/notes-dashboard/notes-dashboard.component';
import { NoteComponent } from './components/note/note.component';
import { ImagePathPipe } from './pipes/image-path.pipe';
import { MakeShortTextPipe } from './pipes/make-short-text.pipe';
import { ModalComponent } from './common/modal/modal.component';
import { ModalViewComponent } from './components/modal-view/modal-view.component';
import {ModalService} from './common/services/modal.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCardModule, MdButtonModule} from '@angular/material';
import {SharedService} from './services/shared.service';
import { PhotosNumberPipe } from './pipes/photos-number.pipe';
import { MatchHeightDirective } from './directives/match-height.directive';
import { RestoreHeightDirective } from './directives/restore-height.directive';
import { IconButtonComponent } from './common/components/icon-button/icon-button.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesDashboardComponent,
    NoteComponent,
    ImagePathPipe,
    MakeShortTextPipe,
    ModalComponent,
    ModalViewComponent,
    PhotosNumberPipe,
    MatchHeightDirective,
    RestoreHeightDirective,
    IconButtonComponent,
    ModalDialogComponent
  ],
  imports: [
    NgbModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  entryComponents:[
    ModalViewComponent,
    ModalDialogComponent
  ],
  providers: [
    DataService,
    ModalService,
    SharedService,
    {
      provide: 'dataURL',
      useValue: environment.dataURL
    },
    {
      provide: 'appImagesURL',
      useValue: environment.appImagesURL
    },
    {
      provide: 'userImagesURL',
      useValue: environment.userImagesURL
    },
    {
      provide: 'menuKey',
      useValue: environment.menuKey
    },
    {
      provide: 'iconsKey',
      useValue: environment.iconsKey
    },
    {
      provide: 'notesKey',
      useValue: environment.notesKey
    },
    {
      provide: 'commentsKey',
      useValue: environment.commentsKey
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
