import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CitasComponent } from './pages/citas/citas.component';
import { UsersComponent } from './pages/users/users.component';
import { CheckLoginGuard } from './shared/guards/check-login.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'users', component: UsersComponent , canActivate:[CheckLoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
