import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListConfiguration } from '../list-configuration';
import { ListRowClick } from '../list-row-click';
import { FilterPipe } from '../filter/filter.pipe';
import { LicenseService } from '../services/license.service';
import { ColumnConfiguration } from '../column-configuration';
import { AssetSearchModel } from '../models/assetsearch.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  pipes: [FilterPipe]
})
export class ListComponent implements OnInit {
  @Input() configuration: ListConfiguration;
  @Input() data: Array<AssetSearchModel>;
  @Output() rowClicked: EventEmitter<ListRowClick> = new EventEmitter<ListRowClick>();
  @Input() term;

  constructor(private licenseService: LicenseService) {

  }

  ngOnInit() {

    this.configuration = new ListConfiguration();
    this.configuration.columns = [];
    this.configuration.columns.push(new ColumnConfiguration('Status', 'Status', 'string', ''));
    this.configuration.columns.push(new ColumnConfiguration('Code', 'Code', 'string', ''));
    this.configuration.columns.push(new ColumnConfiguration('Name', 'Name', 'string', 'name_clicked'));

    // this.licenseService.getLicensesBySearch('be746ef0-a17d-4f2b-ac3e-1f642ba9961e').then( observable => {
    //   console.log('observable');
    //   observable.subscribe(response => {
    //     console.log(response.json());
    //     this.data = response.json();
    //   });
    // });

    this.licenseService.getLicensesBySearch('be746ef0-a17d-4f2b-ac3e-1f642ba9961e')
      .subscribe(data => {
        this.data = data;
      });

  }

  commandClick(row: any, command: string, event: any) {
    // this.rowClicked.emit({ command: command, row: row });
    event.preventDefault();
    this.rowClicked.emit(new ListRowClick(command, row));
  }

  rowClick(row: any, event: any) {
    this.rowClicked.emit(new ListRowClick('', row));
  }
}
