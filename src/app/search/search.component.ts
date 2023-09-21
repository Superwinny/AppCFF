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
