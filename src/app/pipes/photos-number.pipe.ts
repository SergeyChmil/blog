import {Pipe, PipeTransform} from '@angular/core';
import {INoteImage} from '../interfaces/inote';

@Pipe({
  name: 'photosNumber'
})
export class PhotosNumberPipe implements PipeTransform {

  transform(images: INoteImage[], type: string): boolean {
    if (images) {
      switch (type) {
        case 'isOne':
          if (images.length == 1) return true;
          break;
        case 'isMany':
          if (images.length > 1) return true;
          break;
        default:
      }
    }
    return false;
  }

}
