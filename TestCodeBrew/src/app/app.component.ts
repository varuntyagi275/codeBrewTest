import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceService } from './service/service.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Code Brew';

}
