import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetPortfolioComponent } from '../asset-portfolio/asset-portfolio.component';
import { AssetDetailsComponent } from '../asset-details/asset-details.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const RouteDefinitions: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'assetDetails', component: AssetDetailsComponent },
    { path: 'assetPortfolio', component: AssetPortfolioComponent }
];