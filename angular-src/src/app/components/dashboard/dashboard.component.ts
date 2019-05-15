import { Component, OnInit } from '@angular/core';
import { jsonpFactory } from '@angular/http/src/http_module';
import data from '../../../assets/image-tiles.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
stringJson:string;
  constructor() { }
  saveJson(json:string){
  
    console.log(json);
  }
  ngOnInit() {
    this.stringJson=JSON.stringify(data,null,"\t");
  }


}
