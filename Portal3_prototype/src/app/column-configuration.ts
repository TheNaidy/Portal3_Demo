import { Attribute } from './models/attribute';

export class ColumnConfiguration {
    public command: string = '';
    public verticalAlignment: VerticalAlign;
    public horizontalAlignment: HorizontalAlign;

    public tooltipAttribute: Attribute;
    constructor(public headerText: string, public attribute: Attribute) {
    }
}

export enum VerticalAlign {
    top,
    middle,
    bottom
};

export enum HorizontalAlign {
    left,
    center,
    right
};