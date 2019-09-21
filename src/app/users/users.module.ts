import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { UserService } from './services/user.service';
import { UsersRoutingModule } from './users-routing.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { EditUserComponent } from './user-list/edit-user/edit-user.component';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserCreateComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    UsersRoutingModule,
    StoreModule.forFeature('usersState', userReducer)
  ],
  providers: [UserService],
  entryComponents: [EditUserComponent]
})
export class UsersModule { }
