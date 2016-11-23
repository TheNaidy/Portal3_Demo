
import { Attribute, DataType } from './attribute';

export class AssetAttributes {
    public static id: Attribute = { name: 'id', dataType: DataType.guid  };
    public static assetName: Attribute = { name: 'name', dataType: DataType.string };
    public static code: Attribute = { name: 'code', dataType: DataType.string };
    public static status: Attribute = { name: 'status', dataType: DataType.string };
    public static type: Attribute = { name: 'type', dataType: DataType.string };
    public static dateApplication: Attribute = { name: 'dateApplication', dataType: DataType.date };
    public static dateGranted: Attribute = { name: 'dateGranted', dataType: DataType.date };
    public static dateExpired: Attribute = { name: 'dateExpired', dataType: DataType.date };
    public static commodities: Attribute = { name: 'commodities', dataType: DataType.string };
    public static parties: Attribute = { name: 'parties', dataType: DataType.string };
    public static officialArea: Attribute = { name: 'officialArea', dataType: DataType.date };
    public static officialAreaUnit: Attribute = { name: 'officialAreaUnit', dataType: DataType.string };
}

export class AssetModel {

    id: string;
    name: string;
    code: string;
    status: string;
    type: string;

    dateApplication: Date;
    dateGranted: Date;
    dateExpired: Date;

    commodities: string;
    parties: string;

    officialArea: number;
    officialAreaUnit: string;

}
