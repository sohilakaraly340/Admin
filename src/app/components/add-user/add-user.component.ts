import { Component } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  constructor(private usersService: UsersService, private router: Router ,private formBuilder: FormBuilder) { }

  myForm!: FormGroup;


  ngOnInit() {
    this.myForm = this.formBuilder.group({
      id: [Math.floor(Math.random() * 10) + 20],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required]
      })
    });
  }



  create(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value)
      const formData = this.myForm.value as IUser;
      this.usersService.addUser(formData).subscribe(
        (response: any) => {

          console.log('User added successfully:', response);
        },
        (error: any) => {
          console.error('Error adding user:', error);
        }
      );
      this.myForm.reset();
    }
  }
}
