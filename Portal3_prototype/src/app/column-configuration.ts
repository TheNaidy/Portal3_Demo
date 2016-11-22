import { Attribute } from './models/attribute';

export class ColumnConfiguration {
    constructor(public headerText: string, public attribute: Attribute , public command: string) {

    }
}
