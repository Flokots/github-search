import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'search-form', component: SearchFormComponent},
  { path: '', redirectTo:'/landing-page', pathMatch:'full'},
  { path: '**', component:NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
