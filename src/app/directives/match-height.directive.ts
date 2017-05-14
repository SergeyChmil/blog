import { Directive, ElementRef, AfterViewChecked, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMatchHeight]'
})
export class MatchHeightDirective implements AfterViewChecked{

  @Input()
  appMatchHeight:string;

  constructor(private _el:ElementRef) { }

  ngAfterViewChecked(){
    this.matchHeight(this._el.nativeElement, this.appMatchHeight);
  }

  @HostListener('window:resize')
  onResize(){
    this.matchHeight(this._el.nativeElement, this.appMatchHeight);
  }

  matchHeight(parent: HTMLElement, className:string){
    if(!parent) return;
    const children = parent.getElementsByClassName(className);
    if(!children) return;

    Array.from(children).forEach((x: HTMLElement) => {
          x.style.height = 'initial';
    });

    const itemHeights = Array.from(children)
      .map(x => x.getBoundingClientRect().height);

    const maxHeight = itemHeights.reduce((prev, curr) =>{
      return curr > prev ? curr : prev;
    }, 0);

    Array.from(children).forEach((x:HTMLElement) => {
      x.style.height = `${maxHeight}px`});
  }

}
