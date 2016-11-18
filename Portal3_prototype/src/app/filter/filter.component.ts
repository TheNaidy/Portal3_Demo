import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterBoxComponent } from './filter.box';
import { FilterPipe } from './filter.pipe';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  directives: [FilterBoxComponent],
  providers: [FilterService],
  pipes: [FilterPipe]
})
export class FilterComponent implements OnInit {
  @Output() filterTextChanged: EventEmitter<any> = new EventEmitter<any>();
  title = 'Testing Licenses';
  licenses: string[];

  constructor(filterService: FilterService) {
    this.licenses = filterService.getLicenses();
  }

  ngOnInit() {

  }

  public onFilterTextChange(searchString: string) {
    this.filterTextChanged.emit({ value: searchString });
  }
}
