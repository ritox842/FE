import { TestBed } from '@angular/core/testing';
import { LoginService} from "./login.service";

describe('LoginService', () => {
  let loginService : LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });

    loginService = TestBed.get(LoginService);
  });


  it('should...', () => {
    expect(loginService).toEqual('Datorama');
  });

});
