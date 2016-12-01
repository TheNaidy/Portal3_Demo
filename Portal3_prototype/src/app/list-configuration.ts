import { ColumnConfiguration } from './column-configuration';
import { Attribute } from './models/attribute';

export class ListConfiguration {
    columns: Array<ColumnConfiguration>;
    sortAttribute: Attribute;
    selectable: Boolean;

    get attributes(): Array<Attribute> {
        let attributes: Array<Attribute> = new Array();
        this.columns.map(column => {
            attributes.push(column.attribute);
        });
        return attributes;
    }
}
