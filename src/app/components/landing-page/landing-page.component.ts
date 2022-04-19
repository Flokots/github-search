import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository/repository';
import { User } from 'src/app/models/user';
import { SearchUserService } from 'src/app/services/search-user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  user!: User;
  reposDetails!: Repository[]; 
  repository!: Repository;
  searchUserService!: SearchUserService;
  constructor(searchUserService: SearchUserService) { 
   this.searchUserService = searchUserService;
  }

  ngOnInit() {
    this.searchUserService.userRequest();
    this.searchUserService.reposRequest();
    this.user = this.searchUserService.user;
    this.reposDetails = this.searchUserService.reposArray;
    console.log(this.user)
    console.log("above are user details")
    // this.reposArray =
    console.log(this.reposDetails)
    console.log("above are repo details")
    
  }

}
