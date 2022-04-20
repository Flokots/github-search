import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


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

  goToUrl() {
    this.router.navigate(["/landing-page"])
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
