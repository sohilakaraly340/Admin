import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-ditails',
  templateUrl: './user-ditails.component.html',
  styleUrl: './user-ditails.component.css'
})
export class UserDitailsComponent implements OnInit {
  user: any; 

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = +params['id']; 
      this.userService.getUserById(userId).subscribe(user => {
        this.user = user; 
      });
    });
  }
}
