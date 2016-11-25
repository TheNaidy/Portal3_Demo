import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ListConfiguration } from '../list-configuration';
import { ListRowClick } from '../list-row-click';
import { FilterPipe } from '../filter/filter.pipe';
import { LicenseService } from '../services/license.service';
import { ColumnConfiguration, HorizontalAlign, VerticalAlign } from '../column-configuration';
import { Attribute, DataType } from '../models/attribute';

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
          this.sortData(this.configuration.sortAttribute, false);
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
    this.sortData(column.attribute, true);
  }

  private sortData(sortAttribute: Attribute, autoSortFlip: boolean) {
    if (autoSortFlip) {
      if (this.configuration.sortAttribute === sortAttribute) {
        this.sortDirection *= -1;
      } else {
        this.configuration.sortAttribute = sortAttribute;
        this.sortDirection = 1;
      }
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

  public columnStyle(column: ColumnConfiguration) {
    let styles = new Object({});

    switch (column.horizontalAlignment || '') {
      case HorizontalAlign.left:
        styles.textAlign = 'left';
        break;
      case HorizontalAlign.right:
        styles.textAlign = 'right';
        break;
      case HorizontalAlign.center:
        styles.textAlign = 'center';
        break;
      default:
        if (column.attribute.dataType === DataType.number) { styles.textAlign = 'right' };
    }

    switch (column.verticalAlignment || '') {
      case VerticalAlign.top:
        styles.verticalAlign = 'top';
        break;
      case VerticalAlign.middle:
        styles.verticalAlign = 'middle';
        break;
      case VerticalAlign.bottom:
        styles.verticalAlign = 'bottom';
        break;
    }

    return styles;
  }

  public columnTooltip(column: ColumnConfiguration, dataItem: any) {
    if (column.tooltipAttribute) {
      return dataItem[column.tooltipAttribute.name];
    } else {
      return '';
    }
  }
}
