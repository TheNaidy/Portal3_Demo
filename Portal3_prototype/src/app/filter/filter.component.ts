import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterBox } from './filter.box';
import { FilterPipe } from './filter.pipe';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  directives: [ FilterBox ],
  providers: [ FilterService ],
  pipes: [ FilterPipe]
})
export class FilterComponent implements OnInit {
   title = 'Testing Licenses';
   licenses: string[];

 constructor(filterService: FilterService) {
    this.licenses = filterService.getLicenses();
  }

  ngOnInit() {

  }

}
