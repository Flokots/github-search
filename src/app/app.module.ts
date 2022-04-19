import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DisplayUserRepoComponent } from './components/display-user-repo/display-user-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchFormComponent,
    NotFoundComponent,
    DisplayUserRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
