import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  search! : FormGroup;

  ngOnInit(){
    this.search = new FormGroup({
      from: new FormControl(),
      to: new FormControl(),
      time: new FormControl(),
      date: new FormControl(new Date())
    });
  }
}



/**
 * Suqellete HTML
 * Button pour valider le formulaire (avec console log pour voir les info)
 * Transmettre les info a une methode pour la requette AJAX + afficher la reponse (console log)
 * naviguer dans la page result et afficher le resultat de la requette (pipe|json)
 *
  */
