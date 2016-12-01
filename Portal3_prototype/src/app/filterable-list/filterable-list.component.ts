import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListConfiguration } from '../list-configuration';
import { ListRowClick } from '../list-row-click';
import { FilterPipe} from '../filter/filter.pipe';

@Component({
  selector: 'app-filterable-list',
  templateUrl: './filterable-list.component.html',
  styleUrls: ['./filterable-list.component.css'],
   pipes: [FilterPipe]
})
export class FilterableListComponent implements OnInit {
  @Input() configuration: ListConfiguration;
  @Input() data: Array<any>;
  @Output() rowClicked: EventEmitter<ListRowClick> = new EventEmitter<ListRowClick>();
  private term: string = '';
  constructor() { }

  ngOnInit() {

  }

  public rowClick(event: any) {
    this.rowClicked.emit(event);
  }

  public onFilterTextChange(searchString: string){
    this.term = searchString;
  }
}
