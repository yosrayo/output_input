import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {

  nom:any;
  constructor() {}

  ngOnInit(): void {}
  req(event:any  ){
    this.nom=event
    console.log("ggggggghhhhh",this.nom)
  }
}
