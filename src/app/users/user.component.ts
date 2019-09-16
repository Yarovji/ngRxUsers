import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from '../models/user.model';
import { DeleteMassage } from '../models/delete-massage.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((res: Array<User>) => this.users = res);
  }

  addNewUser(user: User) {
    this.userService.addNewUser(user).subscribe((res: User) => this.users.push(res));
  }

  deleteUser(userId: {id: string}) {
    this.userService.deleteUser(userId).subscribe((res: DeleteMassage) => {
      this.users = this.users.filter((item) => item._id !== res.id);
    });
  }

}
