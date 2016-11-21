import { Injectable } from '@angular/core';
import { ListConfiguration } from '../list-configuration';
import { ColumnConfiguration } from '../column-configuration';
import { PageConfiguration } from '../shared/page-configuration';

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
    this.pageConfiguration.ListConfiguration.columns.push(new ColumnConfiguration('Code', 'Code', 'string', 'code_clicked'));
    this.pageConfiguration.ListConfiguration.columns.push(new ColumnConfiguration('Name', 'Name', 'string', ''));
    this.pageConfiguration.ListConfiguration.columns.push(new ColumnConfiguration('Status', 'Status', 'string', ''));

    this.pageConfiguration.ListConfiguration.sortProperty = 'Code';


    return this.pageConfiguration;

  }

}
