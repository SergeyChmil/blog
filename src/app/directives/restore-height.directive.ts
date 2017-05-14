import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appRestoreHeight]'
})
export class RestoreHeightDirective {

  @Input()
  appRestoreHeight:string;

  constructor(private _el:ElementRef) { }

  @HostListener('click')
  onResize(){
    this.restoreHeight(this._el.nativeElement, this.appRestoreHeight);
  }

  restoreHeight(parent: HTMLElement, className:string){
    if(!parent) return;
    const children = parent.getElementsByClassName(className);
    if(!children) return;

    Array.from(children).forEach((x: HTMLElement) => {
      x.style.height = 'initial';
    });
  }

}
