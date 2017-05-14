import {Pipe, PipeTransform} from '@angular/core';
import {INote} from '../interfaces/inote';

@Pipe({
  name: 'makeShortText'
})
export class MakeShortTextPipe implements PipeTransform {

  private _limit: number = 299;
  private _lastSymbols: string = '...';

  transform(note: INote, args?: any): string {
    let body: string = note.body;

    if (body.length > this._limit) {
      body = body.substr(0, this._limit);
      let lastIndex: number = body.lastIndexOf(' ');
      body = body.substr(0, lastIndex);
      if (body.charAt(body.length - 1) === '.') {
        this._lastSymbols = '..';
      }
      return body.concat(this._lastSymbols);
    }
    else {
      return body;
    }
  }

}
