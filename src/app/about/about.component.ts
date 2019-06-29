import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; 
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
@Input() message:string;
@Output() message3 = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }
  notifyEmit(){
    this.message3.emit("message from child");
  }

}
