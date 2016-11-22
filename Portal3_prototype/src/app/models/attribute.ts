export enum DataType {
    string,
    date,
    number,
    boolean
};

export class Attribute {
    name: string;
    dataType: DataType;
}