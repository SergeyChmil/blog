import {Component, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {INote, ICity} from '../../interfaces/inote';
import {FactoryNote} from '../../common/interfaces/IFactoryINote';
import FactoryNotes from '../../classes/FactoryNotes';
import {Observable, Observer} from 'rxjs';
import {Note} from '../../classes/Note';
import {DataService} from '../../services/data.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {RequestOptions} from '@angular/http';

@Component({
  selector: 'app-modal-view',
  templateUrl: 'modal-add-post.component.html',
  styleUrls: ['modal-add-post.component.css']
})
export class ModalAddPost implements OnInit {

  // private _icons: IIcons = {
  //   // china: [],
  //   // world: []
  // };

  public region: string = '';
  public reader = new FileReader();
  private _uploadedFile;
  private _fileToUpload;
  public complexForm: FormGroup;
  public MIN_HEADER_LENGTH: number = 5;
  public MAX_HEADER_LENGTH: number = 20;
  @ViewChild("fileInput") fileInput;

  public nameVal:string;
  public bodyVal:string;
  public publicationDateVal:string;
  public cityVal:number;
  public imagesVal:string;

  constructor(private _fb: FormBuilder, private _sharedService: SharedService, private _dataService: DataService) {
    this.updateForm();
  }

public updateForm(){
  this.complexForm = this._fb.group({
    'name': [this.nameVal, Validators.compose([Validators.required, Validators.minLength(this.MIN_HEADER_LENGTH),
      Validators.maxLength(this.MAX_HEADER_LENGTH)])],
    'body': [this.bodyVal, Validators.required],
    'publication_date': [this.publicationDateVal, Validators.required],
    'city': [this.cityVal, Validators.required],
    'image': [this.imagesVal],
  });
}

public onChangeValue(){
  this.nameVal = this.complexForm.controls['name'].value;
  this.bodyVal = this.complexForm.controls['body'].value;
  this.publicationDateVal = this.complexForm.controls['publication_date'].value;
  this.cityVal = this.complexForm.controls['city'].value;
}

  public updatePhoto($event){
    // let file = $event.target.files[0];
    // this.complexForm = this._fb.group({
      // 'name': [null, Validators.compose([Validators.required, Validators.minLength(this.MIN_HEADER_LENGTH),
      //   Validators.maxLength(this.MAX_HEADER_LENGTH)])],
      // 'body': [null, Validators.required],
      // 'publication_date': [null, Validators.required],
      // 'city': [null, Validators.required],
    //   'image': file
    // });
    // this.complexForm = this._fb.group({
    //   'image': file
    // });

  //   const files = $event.target.files || $event.srcElement.files;
  //   const file = files[0];
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   console.log(formData)
  //   const headerss = new Headers({});
  //   // let options = new RequestOptions({method: 'POST', headerss});
  //
  //   this._dataService.uploadImage(formData);
  //
  // console.log($event)
  }

  public addFile(): void {
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
      this._fileToUpload = fi.files[0];
      // this.reader.onload = this.handleReaderLoaded.bind(this);
      // this.reader.readAsDataURL(this._fileToUpload)
      // console.log(this.reader.readAsDataURL(this._fileToUpload))
      // let fileToUpload = fi.files[0];


      let fd = new FormData();
      fd.append('image', this._fileToUpload);
      // this._fileToUpload.type = 'application/json';
      // console.log('File to upload');
      // console.log(this._fileToUpload);
      this._dataService
        .uploadImage(fd)
        .subscribe(res => {
          console.log('RESULT ?');
          console.log(res.pk);
          console.log(res.image);
          this.imagesVal = String(res.pk);
          this.updateForm();
        });
    }
  }

  // public handleReaderLoaded(e:Event = null){
  //   console.log(rea)
  // }

  submitForm(value: any) {
    console.log('REACTIVE FORM:');
    console.log(value);
    // this._data
    this._sharedService.modalCreatePostProvider.next(value);
    this._sharedService.modelCloseProvider.next('modal close');
  }

  onCancelClick(): void {
    this._sharedService.modelCloseProvider.next('modal close');
  }

  // choseRegion(reg: any) {
  //   this._icons.china.indexOf(reg) > -1 ? this.region = 'china' : this.region = 'world';
  // }

  onSendClick(pHeader: string, pPost: string, pCity: string, pDate: string, params: any[]): void {
    console.log(pDate)

    //создается новая заметка по шаблону
    // let factory: FactoryNotes = new FactoryNotes();
    // let data = {header: pHeader, body: pPost, region: this.region};
    // let note: Note = factory.getNote(data);
    //
    // this._sharedService.modalCreatePostProvider.next(note);
    // this._sharedService.modelCloseProvider.next('modal close');

  }

  ngOnInit() {
    // console.log(this._icons)
  }

}
