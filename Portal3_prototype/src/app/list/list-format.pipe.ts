import { Pipe, PipeTransform } from '@angular/core';
import { DataType } from '../models/attribute';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'listFormat'
})
export class ListFormatPipe implements PipeTransform {

  transform(value: any, dataType: DataType): string {
    let formatted: string;

    switch (dataType) {
      case DataType.string: formatted = value;
        break;
      case DataType.date: formatted = new Date(value).toLocaleDateString();
        break;
      case DataType.number: formatted = (+value).toLocaleString();
        break;
      case DataType.guid: formatted = value;
        break;
    }
    return formatted;
  }

}
