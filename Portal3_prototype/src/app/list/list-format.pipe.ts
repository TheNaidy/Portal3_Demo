import { Pipe, PipeTransform } from '@angular/core';
import { DataType } from '../models/attribute';

@Pipe({
  name: 'listFormat'
})
export class ListFormatPipe implements PipeTransform {

  transform(value: any, dataType: DataType): string {
    let formatted: string;

   switch (dataType) {
      case DataType.string: formatted = value;
        break;
      case DataType.date: formatted = value.substring(0, 10);
        break;
    }
    return formatted;
  }

}
