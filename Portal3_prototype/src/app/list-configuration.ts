import { ColumnConfiguration } from './column-configuration';
import { Attribute } from './models/attribute';

export class ListConfiguration {
    columns: Array<ColumnConfiguration>;
    sortAttribute: Attribute;
}
