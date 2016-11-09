import { Component } from '@angular/core';
import { ListConfiguration } from '././list-configuration';
import { ColumnConfiguration } from '././column-configuration';
import { ListRowClick } from './list-row-click';

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
    this.personList = [{ firstName: 'toby', surname: 'mills' }, { firstName: 'Bilbo', surname: 'Baggins' }];
  }

  public personClicked(event: ListRowClick) {
     console.log(event.command);
     console.log(event.row.firstName);
     console.log(event.row.surname);
  }

  public test() { }
}
