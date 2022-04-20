import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchName = "";

  @Output() newSearch = new EventEmitter<string>();

  submitSearchName(){
    this.newSearch.emit(this.searchName)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
