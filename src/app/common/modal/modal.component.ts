import {
  Component, OnInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentRef,
  ComponentFactoryResolver, HostListener
} from '@angular/core';
import {ModalService} from '../services/modal.service';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{

  @ViewChild('modalContent', {read: ViewContainerRef})
  public modal: ViewContainerRef;

  public isOpen:boolean = false;
  public childComponent:ComponentFactory<any>;
  public modalContext:ComponentRef<any>;

 public constructor(private _modalService:ModalService, private _componentFactoryResolver:ComponentFactoryResolver,
                    private _sharedService:SharedService) {
   this._modalService.modalSequence$$.subscribe(({component,context}: {component:any, context:any}) => {
     // console.log('modal content')
     this.isOpen = true;
     this.childComponent = this._componentFactoryResolver.resolveComponentFactory(component);
     this.modalContext = this.modal.createComponent(this.childComponent);
     Object.keys(context).forEach((key:string) => this.modalContext.instance[key] = context[key]);
   });

   this._sharedService.modalConnector.subscribe(data =>{
     if(data == 'modal close') this.close();
   })
 }

 public close():void{
   this.modalContext.destroy();
   this.isOpen = false;
 }

}
