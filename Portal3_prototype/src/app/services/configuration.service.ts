import { Injectable } from '@angular/core';
import { ListConfiguration } from '../list-configuration';
import { ColumnConfiguration } from '../column-configuration';
import { PageConfiguration } from '../shared/page-configuration';
import { AssetAttributes } from '../models/asset.model';

@Injectable()
export class ConfigurationService {
  // public listConfiguration: ListConfiguration;
  // public savedSearch: any;
  public pageConfiguration: PageConfiguration;

  constructor() { }

  GetPageConfiguration(idPage: any): PageConfiguration {
    // Dummy GUID
    this.pageConfiguration = new PageConfiguration();
    this.pageConfiguration.SavedSearch = 'FCCD63CE-ECE5-4722-B720-AB23349CEFAC';

    this.pageConfiguration.ListConfiguration = new ListConfiguration();
    this.pageConfiguration.ListConfiguration.columns = [];
    this.pageConfiguration.ListConfiguration.columns.push(
      new ColumnConfiguration('Code', AssetAttributes.code, 'code_clicked')
    );
    this.pageConfiguration.ListConfiguration.columns.push(
      new ColumnConfiguration('Name', AssetAttributes.assetName, '')
    );
    this.pageConfiguration.ListConfiguration.columns.push(
      new ColumnConfiguration('Status', AssetAttributes.status, '')
    );
    this.pageConfiguration.ListConfiguration.columns.push(
      new ColumnConfiguration('Applied', AssetAttributes.dateApplication, '')
    );
    this.pageConfiguration.ListConfiguration.columns.push(
      new ColumnConfiguration('Granted', AssetAttributes.dateGranted, '')
    );
        this.pageConfiguration.ListConfiguration.columns.push(
      new ColumnConfiguration('Expires', AssetAttributes.dateExpired, '')
    );

    this.pageConfiguration.ListConfiguration.sortAttribute = AssetAttributes.code;

    return this.pageConfiguration;

  }

}
