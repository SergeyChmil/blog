import {Component, ViewChild, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {DataService} from '../../services/data.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
// import {NoteContextPickerDirective} from '../../directives/note-context-picker.directive';

@Component({
  selector: 'app-modal-view',
  inputs: ['NoteContextPickerDirective'],
  templateUrl: 'modal-add-post.component.html',
  styleUrls: ['modal-add-post.component.css']
})
export class ModalAddPost implements AfterViewInit {

  private _isEdited: boolean = false;
  private _fileToUpload;
  public complexForm: FormGroup;
  public MIN_HEADER_LENGTH: number = 5;
  public MAX_HEADER_LENGTH: number = 20;
  @ViewChild("fileInput") fileInput;
  @ViewChild("formName") formName;

  public nameVal: string;
  public bodyVal: string;
  public publicationDateVal: string;
  public cityVal: number;
  public imagesVal: string;
  public editedNotePk: number;

  constructor(private _fb: FormBuilder, private _sharedService: SharedService, private _dataService: DataService, private cdr: ChangeDetectorRef) {
    this.updateForm();
  }

  public updateForm() {
    this.complexForm = this._fb.group({
      'name': [
        this.nameVal, Validators.compose([
          Validators.required, Validators.minLength(this.MIN_HEADER_LENGTH),
          Validators.maxLength(this.MAX_HEADER_LENGTH)
        ])
      ],
      'body': [this.bodyVal, Validators.required],
      'publication_date': [this.publicationDateVal, Validators.required],
      'city': [this.cityVal, Validators.required],
      'images': [this.imagesVal],
    });
  }

  public updateEditedForm(pNote: any): void {

    if (!pNote) return;

    this._isEdited = true;
    this.editedNotePk = pNote.pk;

    this.nameVal = pNote.name;
    this.bodyVal = pNote.body;
    this.publicationDateVal = pNote.publication_date;
    this.cityVal = pNote.city; // number
    this.imagesVal = pNote.images;
    this.updateForm();
  }

  public onChangeValue() {
    this.fillFormVariablesFromTemplate();
  }

  public fillFormVariablesFromTemplate() {
    this.nameVal = this.complexForm.controls['name'].value;
    this.bodyVal = this.complexForm.controls['body'].value;
    this.publicationDateVal = this.complexForm.controls['publication_date'].value;
    this.cityVal = this.complexForm.controls['city'].value; // number
  }

  public ngAfterViewInit() {
    this.formName.nativeElement.focus();
    this.cdr.detectChanges();
  }

  public addFile(): void {
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
      this._fileToUpload = fi.files[0];

      let fd = new FormData();
      fd.append('image', this._fileToUpload);
      this._dataService
        .uploadImage(fd)
        .subscribe(res => {
          console.log(res)
          this.imagesVal = String(res.image);
          this.updateForm();
        });
    }
  }

  submitForm(note: any) {
    if (this._isEdited) {
      note.pk = this.editedNotePk;
      this._sharedService.editPostProvider.next(note);
    } else {
      this._sharedService.modalCreatePostProvider.next(note);
    }
    this._sharedService.modelCloseProvider.next('modal close');
  }

  onDeleteImageClick(){
    console.log('delete clicked')
    this._sharedService.deleteImageActivator.next('http://localhost:8000/media/sergey/5ee402ce-4d6c-4272-ae6f-83e4c019ccd3.jpeg');
  }

  onCancelClick(): void {
    this._sharedService.modelCloseProvider.next('modal close');
  }

}
