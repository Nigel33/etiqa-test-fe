import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: any = [];
  public user: any = {};
  public selectedUser: any = {};
  public newUser: any = {}; 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.apiService.get('users')
      .subscribe((data: any) => {
        this.users = data;
      });
  }

  public createUser() {
    this.apiService.post('users', this.newUser)
      .subscribe(() => {
        this.loadUsers();
        this.user = {};
      });
  }

  public updateUser(userId: string) {
    this.apiService.put(`users/${userId}`, this.selectedUser)
      .subscribe(() => {
        this.loadUsers();
        this.user = {};
      });
  }

  public deleteUser(userId: string) {
    this.apiService.delete(`users/${userId}`)
      .subscribe(() => {
        this.loadUsers();
      });
  }

  public getUser(userId: string) {    
    this.apiService.get(`users/${userId}`)
      .subscribe((data: any) => {
        this.selectedUser = data;
      });
  }
}
