import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { ModalAddPost } from './components/modal-add-post/modal-add-post.component';
import {ModalService} from './common/services/modal.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCardModule, MdButtonModule} from '@angular/material';
import {SharedService} from './services/shared.service';
import { PhotosNumberPipe } from './pipes/photos-number.pipe';
import { MatchHeightDirective } from './directives/match-height.directive';
import { RestoreHeightDirective } from './directives/restore-height.directive';
import { IconButtonComponent } from './common/components/icon-button/icon-button.component';
import { ModalDeletePost } from './components/modal-delete-post/modal-delete-post.component';
import { PostFilterPipe } from './pipes/post-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NotesDashboardComponent,
    NoteComponent,
    ImagePathPipe,
    MakeShortTextPipe,
    ModalComponent,
    ModalAddPost,
    PhotosNumberPipe,
    MatchHeightDirective,
    RestoreHeightDirective,
    IconButtonComponent,
    ModalDeletePost,
    PostFilterPipe
  ],
  imports: [
    NgbModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  entryComponents:[
    ModalAddPost,
    ModalDeletePost
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
      provide: 'cityKey',
      useValue: environment.cityKey
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
