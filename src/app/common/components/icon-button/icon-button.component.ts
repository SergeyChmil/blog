import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {

@Input()
public type:string;
@Input()
public size:string;

public url:string;


  constructor() { }

  ngOnInit() {
    this._addUrl();
  }

  private _addUrl(){
    switch (this.type){
      case 'trash':
        this.url = '../../../../assets/images/icons/glyphicons/glyphicon-bin.svg';
        break;
      case 'unicorn':
        this.url = '../../../../assets/images/icons/glyphicons/glyphicon-unicorn.svg';
        break;
      default:
        console.error('There is no proper type in Icon Button');
        break;
    }
  }

}
