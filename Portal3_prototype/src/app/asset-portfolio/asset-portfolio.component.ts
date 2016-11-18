import { Component, OnInit, Input } from '@angular/core';
import { AssetModel } from '../models/asset.model';
import { Filter } from '../shared/filter'
import { ListConfiguration} from '../list-configuration';
import { ConfigurationService } from '../services/configuration.service';
import { PageConfiguration } from '../shared/page-configuration';
import { FilterComponent } from '../filter/filter.component';
import { FilterableListComponent } from '../filterable-list/filterable-list.component';
import { LicenseService } from '../services/license.service';
import { AssetSearchModel } from '../models/assetsearch.model';
import { ListRowClick } from '../list-row-click';

@Component({
  selector: 'app-asset-portfolio',
  templateUrl: './asset-portfolio.component.html',
  styleUrls: ['./asset-portfolio.component.css']
})
export class AssetPortfolioComponent implements OnInit {

  // AssetList: Array<AssetModel>;
  // @Input() SavedSearch: any;
  // @Input() Filters: Array<Filter>;
  // @Input() Config: ListConfiguration;
  FilterableList: FilterableListComponent;
  listConfiguration: ListConfiguration;
  pageConfiguration: PageConfiguration;
  data: Array<AssetSearchModel>;
  constructor(public _configurationService:ConfigurationService, private _licenseService: LicenseService) { 
    
  }

  ngOnInit() {
    this.pageConfiguration = this._configurationService.GetPageConfiguration(1);
    this.listConfiguration = this.pageConfiguration.ListConfiguration;     
    console.log(this.listConfiguration);
        
    this._licenseService.getLicensesBySearch('be746ef0-a17d-4f2b-ac3e-1f642ba9961e')
      .subscribe(data => {
        this.data = data; 
        console.log(this.data);       
      });
  }

  public assetClicked(event: ListRowClick) {
    switch (event.command) {
      case '': alert(event.row.Code + 'row clicked');
      break;
      case 'name_clicked': alert(event.row.Name + ' clicked');
      break;
    }
  }

}
