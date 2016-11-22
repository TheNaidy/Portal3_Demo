import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ListConfiguration } from '../list-configuration';
import { ListRowClick } from '../list-row-click';
import { FilterPipe } from '../filter/filter.pipe';
import { LicenseService } from '../services/license.service';
import { ColumnConfiguration } from '../column-configuration';
import { Attribute } from '../models/attribute';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  pipes: [FilterPipe]
})
export class ListComponent implements OnChanges {
  @Input() configuration: ListConfiguration;
  @Input() data: Array<any>;
  @Output() rowClicked: EventEmitter<ListRowClick> = new EventEmitter<ListRowClick>();

  private sortDirection: number = -1;

  constructor(private licenseService: LicenseService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName === 'data') {
        if (changes['data'].currentValue) {
            this.sortData(this.configuration.sortAttribute);
        }
      }
    }
  }

  commandClick(row: any, command: string, event: any) {
    // this.rowClicked.emit({ command: command, row: row });
    event.preventDefault();
    this.rowClicked.emit(new ListRowClick(command, row));
  }

  rowClick(row: any, event: any) {
    this.rowClicked.emit(new ListRowClick('', row));
  }

  headerClick(column: ColumnConfiguration) {
    this.sortData(column.attribute);
  }

  private sortData(sortAttribute: Attribute) {
    if (this.configuration.sortAttribute === sortAttribute) {
      this.sortDirection *= -1;
    } else {
      this.configuration.sortAttribute = sortAttribute;
      this.sortDirection = 1;
    }

    this.data.sort((rowA, rowB) => {
      if (rowA[this.configuration.sortAttribute.name] < rowB[this.configuration.sortAttribute.name]) {
        return -1 * this.sortDirection;
      }
      if (rowA[this.configuration.sortAttribute.name] > rowB[this.configuration.sortAttribute.name]) {
        return 1 * this.sortDirection;
      }
      return 0;
    });
  }
}
