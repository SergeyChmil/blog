import { Pipe, PipeTransform } from '@angular/core';
import {Note} from '../classes/Note';
import {ICity} from '../interfaces/inote';

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  transform(noteList: Note[], args:any[]): Note[] {
    if(!noteList) return;

    // let selectedRegion:number = args[0];
    // let cities:ICity[] = args[1];
    //
    //
    //
    // // var result = jsObjects.filter(function( obj ) {
    // //   return obj.b == 6;
    // // });
    //
    // console.log('!!!!!!!!!!')
    // // console.log(cities[note.city])
    // // return noteList.filter((note:Note) => cities[note.city] === selectedRegion);
    // return noteList.filter((note:Note) => {
    //   let city:any = cities.filter((city:ICity)=>{
    //     return city.pk == note.city;
    //   })

    // });
  }

}
