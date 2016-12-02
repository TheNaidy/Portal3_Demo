import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { AssetPortfolioComponent } from './asset-portfolio/asset-portfolio.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AssetDetailsComponent,
    AssetPortfolioComponent
  ],
  exports: [
    DashboardComponent,
    AssetDetailsComponent,
    AssetPortfolioComponent
  ]
})

export class ComponentModule { }