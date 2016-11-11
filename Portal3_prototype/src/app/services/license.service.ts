import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';

import { AssetSearchModel } from '../models/assetsearch.model';
import { AssetModel } from '../models/asset.model';

@Injectable()
export class LicenseService {

  private baseURL: string = "http://[replace]/api";

  constructor(public _http: Http) {

  }

  getLicensesBySearch(licenseSearchID: any): Observable<AssetSearchModel[]> {
    let licensesearchURL = this.baseURL + '/licensesearch/' + licenseSearchID;

    return this._http.get(licensesearchURL)
      .map(res => res.json());
  }

  getLicense(licenseID: any): Observable<AssetModel> {
    let licenseURL = this.baseURL + '/licenses/' + licenseID;

    return this._http.get(licenseURL)
      .map(res => res.json());
  }

}
