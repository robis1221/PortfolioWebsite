import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
displayArray:string[]=['','',''];
boolArray:boolean[]=[false,false,false];
  constructor() { }
mouseLeave(n:number){
  this.boolArray[n]=false;
  switch(n) {
    case 0:

    this.displayArray[n]="assets/proj1.png"
    break;
    case 1:
    this.displayArray[n]="assets/proj2.png"
      break;
    case 2:
    this.displayArray[n]="assets/proj3.png"
      break;
    default:
    
  }
}
mouseEnter(n:number){
  this.boolArray[n]=true;
  switch(n) {
    case 0:
    this.displayArray[n]="assets/montage1.gif"
    break;
    case 1:
    this.displayArray[n]="assets/montage2.gif"
      break;
    case 2:
    this.displayArray[n]="assets/montage3.gif"
      break;
    default:
    
  }
}
  ngOnInit() {
    this.mouseLeave(0);
    this.mouseLeave(1);
    this.mouseLeave(2);
  }

}
