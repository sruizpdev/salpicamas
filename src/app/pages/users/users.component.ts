import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  users:string[]=[];

  constructor(private usersService: UsersService) {}

  getUsers():void{
    this.users = this.usersService.users;
  }
  ngOnInit(): void {
    this.getUsers();
  }
}
