import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
@Input()nomCandidat: any;
hide: string;
  constructor() { 
    this.hide=localStorage.getItem("hide")
   
  }

  ngOnInit(): void {
    this.hide=localStorage.getItem("hide")
  }

}
