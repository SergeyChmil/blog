import {Pipe, PipeTransform} from '@angular/core';
import {INote, INoteImage} from '../interfaces/inote';
import {environment} from '../../environments/environment';

@Pipe({
  name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {

  transform(note: INoteImage, pathType: string): any {
    if (note) {

      let url: string = environment.appImagesURL;
      let imageName: string = note.path;
      let result: string;

      switch (pathType) {
        case 'path':
          result = `${url}${imageName}`;
          break;
        case 'alt_text':
          result = note.alt_text;
          break;
        default:
      }
      return result;
    }
  }
}
