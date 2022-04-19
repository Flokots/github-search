import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repository } from 'src/app/models/repository/repository';
import { User } from 'src/app/models/user';
import { SearchUserService } from 'src/app/services/search-user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  goToUrl() {
    this.router.navigate(["/search-form"])
  }
  user!: User;
  reposDetails!: Repository[]; 
  repository!: Repository;
  searchUserService!: SearchUserService;
  searchName!: string;

  constructor(searchUserService: SearchUserService, private router: Router) { 
   this.searchUserService = searchUserService;
   this.searchName = "Flokots";
  }

  ngOnInit() {
    this.searchUserService.userRequest(this.searchName);
    this.searchUserService.reposRequest(this.searchName);
    this.user = this.searchUserService.user;
    this.reposDetails = this.searchUserService.reposArray;
  }

}
