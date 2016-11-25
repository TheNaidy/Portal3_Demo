import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
// import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { AssetPortfolioComponent } from './asset-portfolio/asset-portfolio.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { ListComponent } from './list/list.component';
import { FilterableListComponent } from './filterable-list/filterable-list.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { LicenseService } from './services/license.service';
import { MapComponent } from './map/map.component';
import { ConfigurationService } from './services/configuration.service';
import { LoaderService } from './services/loader.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListFormatPipe } from './list/list-format.pipe';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'assetPortfolio', component: AssetPortfolioComponent },
    { path: 'asset', component: AssetDetailsComponent }

];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    AssetPortfolioComponent,
    AssetDetailsComponent,
    DashboardComponent,
    ListComponent,
    FilterableListComponent,
    FilterComponent,
    HeaderComponent,
    NavBarComponent,
    MapComponent,
    ListFormatPipe
  ],
  providers: [LicenseService, ConfigurationService, LoaderService],
  bootstrap: [AppComponent]
})

export class AppModule { }
