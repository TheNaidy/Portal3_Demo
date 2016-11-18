import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AssetPortfolioComponent } from './asset-portfolio/asset-portfolio.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { ListComponent } from './list/list.component';
import { FilterableListComponent } from './filterable-list/filterable-list.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { LicenseService } from './services/license.service';

@NgModule({
  declarations: [
    AppComponent,
    AssetPortfolioComponent,
    AssetDetailsComponent, ListComponent,
    FilterableListComponent,
    FilterComponent,
    HeaderComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LicenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
