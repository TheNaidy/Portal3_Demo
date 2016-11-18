import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListConfiguration } from '../list-configuration';
import { ListRowClick } from '../list-row-click';
import { AssetSearchModel } from '../models/assetsearch.model';

@Component({
  selector: 'app-filterable-list',
  templateUrl: './filterable-list.component.html',
  styleUrls: ['./filterable-list.component.css']
})
export class FilterableListComponent implements OnInit {
  @Input() configuration: ListConfiguration;
  @Input() data: Array<AssetSearchModel>;
  @Output() rowClicked: EventEmitter<ListRowClick> = new EventEmitter<ListRowClick>();
  constructor() { }

  ngOnInit() {
  }

  public rowClick(event: any) {
    this.rowClicked.emit(event);
  }

  public onFilterTexChange(searchString: string){
console.log('yup')
  }
}
