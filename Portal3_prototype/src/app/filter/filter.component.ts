
import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterTextChanged: EventEmitter<any> = new EventEmitter<any>();
  title = 'Testing Licenses';
  licenses: string[];

  public onFilterTextChange(searchString: string) {
    this.filterTextChanged.emit({ value: searchString });
  }
  public viewDropdown(){
    console.log('something');
  }
}
