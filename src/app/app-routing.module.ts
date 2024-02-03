import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDitailsComponent } from './components/user-ditails/user-ditails.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:AllUsersComponent},
  // {path:'user/:id',component:UserDitailsComponent},
  {path:'AddUser',component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
