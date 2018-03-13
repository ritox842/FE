import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from "@angular/core/testing";
import {LoggedUsersDataService} from "./test-data.service";
import {users} from "./test.mocks";
import {URI_CONSTANTS} from "@datorama/config/constants/uri.constants/constants/uri.constants";
import {HTTP_REQUEST, mockUriUtil} from "@datorama/tests/utils";

fdescribe('TestDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let testDataService: TestDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestDataService, mockUriUtil()],
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    testDataService = TestBed.get(TestDataService);
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
