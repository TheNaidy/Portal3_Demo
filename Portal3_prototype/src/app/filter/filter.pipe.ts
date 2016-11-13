import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterpipe',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(value: any, [term]): string {
        return value.filter((data) => data.firstName.startsWith(term));
    }
}
