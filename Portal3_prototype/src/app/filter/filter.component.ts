import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterBoxComponent } from './filter.box';
import { FilterDropdownComponent } from './filter.dropdown';
import { FilterPipe } from './filter.pipe';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  directives: [FilterBoxComponent, FilterDropdownComponent],
  providers: [FilterService],
  pipes: [FilterPipe]
})
export class FilterComponent {
  @Output() filterTextChanged: EventEmitter<any> = new EventEmitter<any>();
  title = 'Testing Licenses';
  licenses: string[];

  constructor(filterService: FilterService) {
    this.licenses = filterService.getLicenses();
  }
  public onFilterTextChange(searchString: string) {
    this.filterTextChanged.emit({ value: searchString });
  }
  public viewDropdown(){
    console.log('something');
  }
}
