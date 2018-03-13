import { Injectable } from "@angular/core";
import { LoginDataService } from './login-data.service';

@Injectable()
export class LoginService {

  constructor(private login: LoginDataService) {
  }

}
