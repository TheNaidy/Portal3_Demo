import { Injectable } from '@angular/core';
import { Attribute, DataType } from '../models/attribute';

@Injectable()
export class LoaderService {

  constructor() { }

  loadDataModel(dataItem: any, attributes: any) {
    // modify the accepted 'dataItem' to ensure all properties described
    // by the 'attributes' object are present, and have the appropriate data type.
    // Note: the 'attributes' object should be an object with properties that are all of type Attribute

    for (let attributeName in attributes) {
      if (attributes.hasOwnProperty(attributeName)) {
        let attribute: Attribute = attributes[attributeName];

        if (!dataItem.hasOwnProperty(attributeName)) {
          dataItem[attributeName] = '';
        }

        switch (attribute.dataType) {
          case DataType.date:
            dataItem[attribute.name] = new Date(dataItem[attribute.name]);
            break;
          case DataType.boolean:
            dataItem[attribute.name] = dataItem[attribute.name] ? true : false;
            break;
          case DataType.number:
            dataItem[attribute.name] = +dataItem[attribute.name];
            break;
        }
      }
    }
  }
};
