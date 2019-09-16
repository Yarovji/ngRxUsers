import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { UserService } from './services/user.service';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    UsersRoutingModule
  ],
  providers: [UserService]
})
export class UsersModule { }
