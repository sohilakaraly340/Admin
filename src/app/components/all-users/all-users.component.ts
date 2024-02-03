import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces/IUser';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent implements OnInit {

  users!: Observable<IUser[]>;
  editingUser: IUser | null = null;

  constructor(private userService: UsersService, private router: Router) { }


  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.userService.getAllUsers();

  }
  editUser(user: IUser) {
    this.editingUser = { ...user }; 
  }

  delete(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
  cancel(){
    this.editingUser = null; 
    
  }

  updateUser() {
    if (this.editingUser) {
      this.userService.updateUser(this.editingUser.id, this.editingUser).subscribe(
        updatedUser => {
          console.log('User updated successfully:', updatedUser);
          this.editingUser = null; 
          this.loadUsers();
        }
      );
    }
  }
}
