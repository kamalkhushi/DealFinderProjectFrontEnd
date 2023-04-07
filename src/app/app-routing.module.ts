import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path : '', redirectTo : 'auth', pathMatch : 'full'},
  {path : 'auth', component : AuthenticationComponent},
  {path : 'home', component : HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
