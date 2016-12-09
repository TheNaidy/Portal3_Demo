import { Pipe, PipeTransform } from '@angular/core';
import { ListConfiguration } from '../list-configuration';
import { DataType } from '../models/attribute';

@Pipe({
    name: 'filterpipe',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(value: Array<any>, term: string, listConfig: ListConfiguration) {
        let returnvalue =
            value.filter((data) => {
                let match: Boolean = false;
                for (let i = 0, len = listConfig.columns.length; i < len; i++) {
                    if (listConfig.columns[i].attribute.dataType === DataType.string) {
                        if (data[listConfig.columns[i].attribute.name].toLowerCase().includes(term.toLowerCase())) { match = true; }
                    }
                }
                return match;
            });
        return returnvalue;
    }
}