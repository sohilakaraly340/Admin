import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpOptions:any;

  constructor(private httpClient :HttpClient) {}

  getAllUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>('http://localhost:3000/users');
  }

  getUserById(id:number): Observable<IUser>{
    return this.httpClient.get<IUser>(`http://localhost:3000/users/${id}`);
  }

  addUser(user:IUser): Observable<IUser>{
    return this.httpClient.post<IUser>(`http://localhost:3000/users/`,JSON.stringify(user))
  }

  updateUser(id: number, user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(`http://localhost:3000/users/${id}`, JSON.stringify(user));
  }

  deleteUser(id:number){
    return this.httpClient.delete(`http://localhost:3000/users/${id}`);
  }
}
