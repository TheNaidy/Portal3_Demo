import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFormat'
})
export class ListFormatPipe implements PipeTransform {

  transform(value: any, dataType: string): string {
    let formatted: string;

    switch (dataType) {
      case 'string': formatted = value;
        break;
      case 'date': formatted = value.substring(0, 10);
        break;
    }
    return formatted;
  }

}
