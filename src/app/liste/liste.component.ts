import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Candidat } from '../models/candidat';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  nom: string;
   list1: Candidat[]  ;
  candidat1= new Candidat(1,"yosra","bahri", 23,"etudiante" , "assets/yosra2.png")
  candidat2= new Candidat(1,"maha","baraket", 23,"etudiante", "assets/maha.png")
  candidat3= new Candidat(1,"anghame","hassine", 23,"etudiante", "assets/anghame.jpg")
 
 candidat:Candidat;

  constructor() {
    this.list1=[this.candidat1,this.candidat2, this.candidat3]
   
    console.log("fffffffffff",this.list1)
   }

  ngOnInit(): void {
    console.log("fffffffffff",this.list1)
    
    localStorage.setItem("hide","")
    
  }
  addNewItem(value:any) {
    this.newItemEvent.emit(value);
    localStorage.setItem("hide","true")
    
    
  }
  
}
