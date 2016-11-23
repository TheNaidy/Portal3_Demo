import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { AssetModel, AssetAttributes } from '../models/asset.model';
import { LoaderService } from '././loader.service';

@Injectable()
export class LicenseService {

  private baseURL: string;
  private headers: Headers;
  private options: RequestOptions;

  constructor (public _http: Http, public loaderService: LoaderService) {
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

  public getLicensesBySearch(licenseSearchID: any): Observable<AssetModel[]> {

    let licensesearchURL = this.baseURL + '/licenses/executesearch';
    let self = this;

    return this._http.post(licensesearchURL, '', this.options)
      .map(res => {
        let data = res.json();
        data.map(function (license: AssetModel) {
          self.loaderService.loadDataModel(license, AssetAttributes);
          return license;
        });
        console.log(data);
        return data;
      });
  }

  getLicense(licenseID: any): Observable<AssetModel> {
    let licenseURL = this.baseURL + '/licenses/' + licenseID;

    return this._http.get(licenseURL, this.options)
      .map(res => res.json());
  }

}
