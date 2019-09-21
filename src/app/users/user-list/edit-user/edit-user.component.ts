import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserListComponent } from '../user-list.component';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UserListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick() {
    const newData = {
      name: this.data.name,
      id: this.data._id
    };
    this.dialogRef.close(newData);
  }

}
