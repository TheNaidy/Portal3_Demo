export enum DataType {
    string,
    date,
    number,
    boolean,
    guid
};

export class Attribute {
    name: string;
    dataType: DataType;
}