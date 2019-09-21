import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from './services/user.service';
import { Store } from '@ngrx/store';
import { getAllUsers, UsersState } from './store/user.reducer';
import { GetAllUsers } from './store/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: Array<User>;

  constructor(private userService: UserService, private store: Store<UsersState>) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      this.store.dispatch(new GetAllUsers(res));
    });
    this.store.select(getAllUsers).subscribe(res => {
      this.users = res;
    });
  }
}
