import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { AssetSearchModel } from '../models/assetsearch.model';
import { AssetModel } from '../models/asset.model';

@Injectable()
export class LicenseService {

  private baseURL: string;
  private headers: Headers;
  private options: RequestOptions;

  constructor(public _http: Http) {
    if (environment.production) {
      this.baseURL = location.host + location.pathname + 'api';
    } else {
      this.baseURL = environment.apiUrl;
    }
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

    this.options = new RequestOptions({
      headers: this.headers,
      body: ''
    });
  }

  getLicensesBySearch(licenseSearchID: any): Observable<AssetSearchModel[]> {
    console.log('getLicensesBySearch');
    
     let licensesearchURL = this.baseURL + '/licensesearch/' + licenseSearchID;
    // return Promise.resolve(this._http.get(licensesearchURL, this.options));

       return this._http.get(licensesearchURL, this.options)
         .map(res => res.json());
  }

  getLicense(licenseID: any): Observable<AssetModel> {
    let licenseURL = this.baseURL + '/licenses/' + licenseID;

    return this._http.get(licenseURL, this.options)
      .map(res => res.json());
  }

}
