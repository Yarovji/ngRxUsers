import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { CreateUser } from '../store/user.actions';
import { UsersState } from '../store/user.reducer';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  @Input() users: Array<User>;

  constructor(private userService: UserService, private store: Store<UsersState>) {}

  ngOnInit() {}

  addNewUser(user: User) {
    this.userService.addNewUser(user).subscribe((res: User) => {
      this.store.dispatch(new CreateUser(res));
      // this.users.push(res);
    });
  }
}
