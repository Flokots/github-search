import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SearchUserService } from 'src/app/services/search-user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  user!: User;
  constructor(private searchUserService: SearchUserService) { 
   
  }

  ngOnInit() {
    this.searchUserService.userRequest();
    this.user = this.searchUserService.user;
  }

}
