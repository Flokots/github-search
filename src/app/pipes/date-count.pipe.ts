import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any) {
    let startDate: string = value;
    let date1: Date = new Date();
    let date2: Date = new Date(startDate);
    let timeInMs: number = date1.getTime() - date2.getTime();
    let dateCounter: number = Math.ceil(timeInMs / (1000 * 60 * 60 * 24));
    return dateCounter;
   
  }
}