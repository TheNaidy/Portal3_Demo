import { Component, OnInit, } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [FilterService]
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
