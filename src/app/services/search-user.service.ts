import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  user!: User;

  constructor(private http: HttpClient) {
    this.user = new User("","","", 0, new Date(), new Date(), 0,"")
   }

   userRequest() {
     interface ApiResponse {
      name: string,
      login: string,
      avatar_url: string,
      followers: number,
      created_at: Date,
      updated_at: Date,
      html_url: string,
      public_repos: number
     }

     let promise = new Promise((resolve, reject) => {
       this.http.get<ApiResponse>("https://api.github.com/users/Flokots").toPromise().then((response: any) => {
         this.user.name = response.name
         this.user.login = response.login
         this.user.avatar_url = response.avatar_url
         this.user.followers = response.followers
         this.user.created_at = response.created_at
         this.user.updated_at = response.updated_at
         this.user.html_url = response.html_url
         this.user.public_repos = response.public_repos

         resolve(response)
       }, error => {
         reject(error)
       })
     })
     return promise
   }
}
