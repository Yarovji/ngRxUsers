import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../services/user.service';
import { DeleteMassage } from 'src/app/models/delete-massage.model';
import { Store } from '@ngrx/store';
import { DeleteUser, EditUser } from '../store/user.actions';
import { UsersState } from '../store/user.reducer';
import { MatDialog } from '@angular/material';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: Array<User>;
  constructor(
    private userService: UserService,
    private store: Store<UsersState>,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  deleteUser(userId: { id: string }) {
    this.userService.deleteUser(userId).subscribe((res: DeleteMassage) => {
      // this.users = this.users.filter((item) => item._id !== res.id);
      this.store.dispatch(new DeleteUser(res.id));
    });
  }

  openDialog(user: User): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '250px',
      data: {...user}
    });

    dialogRef.afterClosed().subscribe((result: User) => {
      this.userService.editUser(result).subscribe(res => {
        this.store.dispatch(new EditUser(res));
      });
    });
  }
}
