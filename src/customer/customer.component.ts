import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {
  public product=[
    {name:'nike' ,price:1000, category:"shoes"},
    {name:'samsung' , price:20000, category:"electronics"},
    {name:'iphone' , price:50000, category:"electronics"},
    {name:'bata' , price:200, category:"shoes"}
  ]
public filter='electronics';
  

  
}
