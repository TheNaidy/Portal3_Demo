import { Pipe, PipeTransform } from '@angular/core';
import { ListConfiguration } from '../list-configuration';

@Pipe({
    name: 'filterpipe',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(value: Array<any>, term: string, listConfig: ListConfiguration) {
        return value.filter((data) => {
            let match: boolean = false;
            for (let i = 0, len = listConfig.columns.length; i < len; i++) {
                if (data[listConfig.columns[i].attribute.name].startsWith(term)) { match = true; }
            }
            return match;
        });
    }
}
