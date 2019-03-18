import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  { path: 'api/home', component: HomeComponent},
  { path: '', component: LoginComponent},
  { path: 'api/register', component: RegisterComponent},
  { path: 'api/profile', component: ProfileComponent},
  { path: 'events', component: EventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
