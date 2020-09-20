import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from '../service/service.service';
import { MatSort } from '@angular/material/sort';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


export interface TableData {
  name: string;
  building_Name: string;
  tower_name: string;
  property_name: string;
  configuration_name: string;
  min_price: number;
  bedroom: number;
  bathroom: number;
  half_bathroom: number;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'building_Name', 'tower_name', 'property_name', 'configuration_name', 'min_price', 'bedroom', 'bathroom', 'half_bathroom'];
  dataSource: MatTableDataSource<any>
  configurationInput :any
  configurationList=[]
  @ViewChild(MatSort,{ static: true }) sort: MatSort;

  minPrice: any
  order: any
  data: any;

  constructor(private s: ServiceService) {
    this.s.getJSON().subscribe(data => {
      this.data = data.data
      console.log(this.data)
      // this.dataSource.sort = this.sort;
      this.dataSource=new MatTableDataSource<TableData>(data.data)
      this.dataSource.sort = this.sort;
      this.data.forEach(element => {
        this. configurationList.push(element.configuration.name);
      });
      let configurationList=[...new Set(this.configurationList)]
      this.configurationList=configurationList
      console.log(this.configurationList)

    })
  }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
  
  }

 

  applyFilter(filterValue:string) {
this.dataSource.filter=filterValue.trim().toLowerCase()
  }

  orderFunction(e) {
    console.log(e.target.value)
  }

  minPriceFunction(e) {

    let minPrice=e.target.value;
    let FilterArray=[]
    if(!minPrice){
      this.dataSource=this.data;
      return
    }
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].min_price>minPrice){

          FilterArray.push(this.data[i]);

      }
    }
    this.dataSource=new MatTableDataSource( FilterArray)
  } 

  setConfiguration(e)
  {

    console.log(this.configurationInput);
    let FilterArray=[]
   
    if(this.configurationInput.length===0){
      this.dataSource=this.data;
      return
    }
    for(let i=0;i<this.data.length;i++){
      for(let j=0;j<this.configurationInput.length;j++){
      if(this.data[i].configuration.name==this.configurationInput[j]){

          FilterArray.push(this.data[i]);

      }
    }
    }
    this.dataSource=new MatTableDataSource( FilterArray)
  
  }

}
