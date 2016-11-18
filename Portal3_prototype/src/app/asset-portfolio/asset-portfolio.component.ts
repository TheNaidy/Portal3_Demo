import { Component, OnInit, Input } from '@angular/core';
import { AssetModel } from '../models/asset.model';
import { Filter } from '../shared/filter'
import { ListConfiguration} from '../list-configuration';
import { ConfigurationService } from '../services/configuration.service';
import { PageConfiguration } from '../shared/page-configuration';
import { FilterComponent } from '../filter/filter.component';
import { FilterableListComponent } from '../filterable-list/filterable-list.component';

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

  pageConfiguration: PageConfiguration;

  constructor(public _configurationService:ConfigurationService) { 
    
  }

  ngOnInit() {
    this.pageConfiguration=this._configurationService.GetPageConfiguration(1);
  }

}
