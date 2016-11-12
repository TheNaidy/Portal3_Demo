import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';

import { AssetSearchModel } from '../models/assetsearch.model';
import { AssetModel } from '../models/asset.model';

@Injectable()
export class LicenseService {

  private baseURL: string = "http://[replace]/api";
  private headers: Headers;
  private options: RequestOptions;

  constructor(public _http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

    this.options = new RequestOptions({
      headers: this.headers
    });
  }

  getLicensesBySearch(licenseSearchID: any): Observable<AssetSearchModel[]> {
    let licensesearchURL = this.baseURL + '/licensesearch/' + licenseSearchID;

    return this._http.get(licensesearchURL, this.options)
      .map(res => res.json());
  }

  getLicense(licenseID: any): Observable<AssetModel> {
    let licenseURL = this.baseURL + '/licenses/' + licenseID;

    return this._http.get(licenseURL, this.options)
      .map(res => res.json());
  }

}
