import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { LoginDataService } from "./login-data.service";
import { LoginService} from "./login.service";
import {extendDefaultModule, getGridHeaderComponent, getGridHeaderComponentText} from "@datorama/tests/utils";
import {dataServiceMock} from "./logged-users.mocks";
import {DatoSnackbar} from "@datorama/core";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let loginDataService: LoginDataService;
  let snackBar: DatoSnackbar;

  beforeEach(async () => {
    const module = extendDefaultModule(
      {
        providers: [
          {
            provide: LoginDataService,
            useValue: dataServiceMock
          },
          LoginService
        ],
        declarations: [LoginComponent]
      });

    TestBed.configureTestingModule(module).compileComponents();
    loginService = TestBed.get(LoginService);
    snackBar = TestBed.get(DatoSnackbar);
    loginDataService = TestBed.get(LoginDataService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should display the grid', async(async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(component.gridApi.getDisplayedRowCount()).toEqual(2);
  }));

  it('should display the correct row count in the grid header', async(async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const gridHeaderComponent = getGridHeaderComponent(fixture);
    expect(getGridHeaderComponentText(gridHeaderComponent)).toContain(component.gridApi.getDisplayedRowCount());
  }));

  it('should call logout and show the success message', async(async () => {
    spyOn(component, 'getSelectedRow').and.callFake(() => {
      return {
        token: 'token'
      };
    });
    spyOn(loginService, 'logoutUser').and.callThrough();
    spyOn(snackBar, 'info').and.callThrough();
    fixture.detectChanges();
    await fixture.whenStable();
    component.logoutUser();
    expect(loginService.logoutUser).toHaveBeenCalled();
    expect(snackBar.info).toHaveBeenCalled();

  }));

  it('should show an error message on error', async(async () => {
    spyOn(loginDataService, 'logoutUser').and.callFake(() => {
      return ErrorObservable.create('error');
    });
    spyOn(component, 'getSelectedRow').and.callFake(() => {
      return {
        id: 1
      };
    });
    spyOn(loginService, 'logoutUser').and.callThrough();
    spyOn(snackBar, 'error').and.callThrough();
    fixture.detectChanges();
    await fixture.whenStable();
    component.logoutUser();
    expect(loginService.logoutUser).toHaveBeenCalled();
    expect(snackBar.error).toHaveBeenCalled();

  }));

});
