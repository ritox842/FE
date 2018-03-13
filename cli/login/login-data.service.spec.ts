import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from "@angular/core/testing";
import { LoginDataService} from "./login-data.service";
import {users} from "./login.mocks";
import {URI_CONSTANTS} from "@datorama/config/constants/uri.constants/constants/uri.constants";
import {HTTP_REQUEST, mockUriUtil} from "@datorama/tests/utils";

fdescribe('LoginDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let loginDataService: LoginDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginDataService, mockUriUtil()],
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    loginDataService = TestBed.get(LoginDataService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('Should get the logged users', () => {

    loggedUsersDataService.getUsers()
      .subscribe((data) =>
        expect(data).toEqual(users)
      );

    const req = httpTestingController.expectOne(URI_CONSTANTS.admin.loggedUsers);

    expect(req.request.method).toEqual(HTTP_REQUEST.GET);
    req.flush(users);
  });

  it('Should logout the user', () => {
    const token = 'token';

    loggedUsersDataService.logoutUser(token)
      .subscribe();

    const req = httpTestingController.expectOne(`${URI_CONSTANTS.admin.logoutUser}?logoutToken=${token}`);

    expect(req.request.method).toEqual(HTTP_REQUEST.POST);
    req.flush({success: true});
  });

});
