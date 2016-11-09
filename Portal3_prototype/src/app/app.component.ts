import { Component } from '@angular/core';
import { ListConfiguration } from '././list-configuration';
import { ColumnConfiguration } from '././column-configuration';
import { ListRowClick } from './list-row-click';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public personList: Array<any>;
  public personListConfig: ListConfiguration;

  title = 'app works!';

  constructor() {
    this.personListConfig = new ListConfiguration();
    this.personListConfig.columns = [];
    this.personListConfig.columns.push(new ColumnConfiguration('First Name', 'firstName', 'string', 'name_clicked'));
    this.personListConfig.columns.push(new ColumnConfiguration('Surname', 'surname', 'string', ''));
    this.personListConfig.columns.push(new ColumnConfiguration('Species', 'species', 'string', 'species_clicked'));
    this.personList = [
      { firstName: 'Bilbo', surname: 'Baggins', species: 'Hobbit' },
      { firstName: 'Gimli', surname: 'son of Glóin', species: 'Dwarf' },
      { firstName: 'Elrond', surname: 'Half-Elvin', species: 'Elf' },
    ];
  }

  public personClicked(event: ListRowClick) {
    switch (event.command) {
      case '': alert(event.row.firstName + ' ' + event.row.surname + ' is a ' + event.row.species);
      break;
      case 'name_clicked': alert(event.row.firstName + "'s surname is " + event.row.surname);
      break;
      case 'species_clicked': alert(event.row.firstName + ' is a ' + event.row.species);
      break;
    }
  }
}
