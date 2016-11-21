export enum AssetModelAttribute {
    id, 
    name, 
    code,
    status,
    type,
    dateApplication,
    dateGranted,
    dateExpired,
    commodities,
    parties,
    officialArea,
    officialAreaUnit
};

export class AssetModel{

    id:string;
    name:string;
    code:string;
    status:string;
    type:string;

    dateApplication:Date;
    dateGranted:Date;
    dateExpired:Date;

    commodities:string;
    parties:string;

    officialArea:number;
    officialAreaUnit:string;

}