import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import { LoggedUsersComponent } from "./logged-users.component";
import { LoggedUsersDataService } from "./logged-users-data.service";
import { LoggedUsersService} from "./logged-users.service";
import {extendDefaultModule, getGridHeaderComponent, getGridHeaderComponentText} from "../../tests-utils";
import {dataServiceMock} from "./logged-users.mocks";
import {DatoSnackbar} from "@datorama/core";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

describe('LoggedUsersComponent', () => {

  let component: LoggedUsersComponent;
  let fixture: ComponentFixture<LoggedUsersComponent>;
  let loggedUsersService: LoggedUsersService;
  let loggedUsersDataService: LoggedUsersDataService;
  let snackBar: DatoSnackbar;

  beforeEach(async () => {
    const module = extendDefaultModule(
      {
        providers: [
          {
            provide: LoggedUsersDataService,
            useValue: dataServiceMock
          },
          LoggedUsersService
        ],
        declarations: [LoggedUsersComponent]
      });

    TestBed.configureTestingModule(module).compileComponents();
    loggedUsersService = TestBed.get(LoggedUsersService);
    snackBar = TestBed.get(DatoSnackbar);
    loggedUsersDataService = TestBed.get(LoggedUsersDataService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedUsersComponent);
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
    spyOn(loggedUsersService, 'logoutUser').and.callThrough();
    spyOn(snackBar, 'info').and.callThrough();
    fixture.detectChanges();
    await fixture.whenStable();
    component.logoutUser();
    expect(loggedUsersService.logoutUser).toHaveBeenCalled();
    expect(snackBar.info).toHaveBeenCalled();

  }));

  it('should show an error message on error', async(async () => {
    spyOn(loggedUsersDataService, 'logoutUser').and.callFake(() => {
      return ErrorObservable.create('error');
    });
    spyOn(component, 'getSelectedRow').and.callFake(() => {
      return {
        id: 1
      };
    });
    spyOn(loggedUsersService, 'logoutUser').and.callThrough();
    spyOn(snackBar, 'error').and.callThrough();
    fixture.detectChanges();
    await fixture.whenStable();
    component.logoutUser();
    expect(loggedUsersService.logoutUser).toHaveBeenCalled();
    expect(snackBar.error).toHaveBeenCalled();

  }));

});
