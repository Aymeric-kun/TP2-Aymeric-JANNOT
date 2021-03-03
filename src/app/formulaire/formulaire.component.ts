import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  valid1 : boolean = true;
  valid2 : boolean = false;
  click : string = "";
  prenom : string = "";

  constructor() { }

  click1 () {
    console.log("click");
    this.click = "Bouton 1 cliqué";
    this.valid1 = false;
    this.valid2 = true;
  }

  click2 () {
    console.log("click");
    this.click = "Bouton 2 cliqué";
    this.valid1 = true;
    this.valid2 = false;
  }

  ngOnInit(): void {
  }

}
