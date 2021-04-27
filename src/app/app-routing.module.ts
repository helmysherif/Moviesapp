import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NetworkComponent } from './components/network/network.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PeopleComponent } from './components/people/people.component';
import { RegisterComponent } from './components/register/register.component';
import { TvComponent } from './components/tv/tv.component';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  {path : '' , redirectTo : 'login' , pathMatch : 'full'},
  {path : 'home' , canActivate : [AuthGuard] , component : HomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'movies' , canActivate : [AuthGuard] , component : MoviesComponent},
  {path : 'about' , canActivate : [AuthGuard] , component : AboutComponent},
  {path : 'people' , canActivate : [AuthGuard] , component : PeopleComponent},
  {path : 'network' , canActivate : [AuthGuard] , component : NetworkComponent},
  {path : 'tv' , canActivate : [AuthGuard] , component : TvComponent},
  {path : 'movieDetails/:type/:id' , canActivate : [AuthGuard] , component : MovieDetailsComponent},
  {path : '**' , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
