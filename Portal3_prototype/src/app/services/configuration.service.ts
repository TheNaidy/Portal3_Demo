import { Injectable } from '@angular/core';
import { ListConfiguration } from '../list-configuration';
import { ColumnConfiguration, HorizontalAlign } from '../column-configuration';
import { PageConfiguration } from '../shared/page-configuration';
import { AssetAttributes } from '../models/asset.model';

@Injectable()
export class ConfigurationService {
  // public listConfiguration: ListConfiguration;
  // public savedSearch: any;
  public pageConfiguration: PageConfiguration;

  constructor() { }

  GetPageConfiguration(idPage: any): PageConfiguration {
    let columns: Array<ColumnConfiguration> = [];

    this.pageConfiguration = new PageConfiguration();
    this.pageConfiguration.SavedSearch = 'FCCD63CE-ECE5-4722-B720-AB23349CEFAC';

    this.pageConfiguration.ListConfiguration = new ListConfiguration();
    columns.push(
      new ColumnConfiguration('Code', AssetAttributes.code)
    );
    columns[columns.length - 1].command = 'code_clicked';
    columns[columns.length - 1].horizontalAlignment = HorizontalAlign.center;

    columns.push(
      new ColumnConfiguration('Name', AssetAttributes.assetName)
    );
    columns[columns.length - 1].tooltipAttribute = AssetAttributes.code;
    columns.push(
      new ColumnConfiguration('Status', AssetAttributes.status)
    );
    columns.push(
      new ColumnConfiguration('Commodities', AssetAttributes.commodities)
    );
    columns[columns.length - 1].horizontalAlignment = HorizontalAlign.center;
    columns.push(
      new ColumnConfiguration('Applied', AssetAttributes.dateApplication)
    );
    columns.push(
      new ColumnConfiguration('Area', AssetAttributes.officialArea)
    );
    columns.push(
      new ColumnConfiguration('Unit', AssetAttributes.officialAreaUnit)
    );
    this.pageConfiguration.ListConfiguration.columns = columns;

    this.pageConfiguration.ListConfiguration.sortAttribute = AssetAttributes.code;

    return this.pageConfiguration;

  }

}
