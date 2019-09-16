import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { DeleteMassage } from '../../models/delete-massage.model';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  addNewUser(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8081/api/user`, user);
  }

  getUsers(): Observable<[User]> {
    return this.http.get<[User]>(`http://localhost:8081/api/users`);
  }

  deleteUser(userId): Observable<DeleteMassage> {
    return this.http.delete<DeleteMassage>(`http://localhost:8081/api/user/${userId}`);
  }

}
