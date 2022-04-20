import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayUserRepoComponent } from './components/display-user-repo/display-user-repo.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'display-user-repo', component: DisplayUserRepoComponent },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
