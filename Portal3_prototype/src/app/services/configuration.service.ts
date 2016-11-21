import { Injectable } from '@angular/core';
import { ListConfiguration } from '../list-configuration';
import { ColumnConfiguration } from '../column-configuration';
import { PageConfiguration } from '../shared/page-configuration';
import { AssetModelAttribute } from '../models/asset.model';

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
     this.pageConfiguration.ListConfiguration.columns.push(new ColumnConfiguration('Code', AssetModelAttribute[AssetModelAttribute.code], 'string', 'code_clicked'));
     this.pageConfiguration.ListConfiguration.columns.push(new ColumnConfiguration('Name', AssetModelAttribute[AssetModelAttribute.name], 'string', ''));
     this.pageConfiguration.ListConfiguration.columns.push(new ColumnConfiguration('Status', AssetModelAttribute[AssetModelAttribute.status], 'string', ''));

    this.pageConfiguration.ListConfiguration.sortProperty = AssetModelAttribute[AssetModelAttribute.code];


    return this.pageConfiguration;

  }

}
