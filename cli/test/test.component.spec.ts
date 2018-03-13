import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import { TestComponent } from "./test.component";
import { TestDataService } from "./test-data.service";
import { TestService} from "./test.service";
import {extendDefaultModule, getGridHeaderComponent, getGridHeaderComponentText} from "@datorama/tests/utils";
import {dataServiceMock} from "./logged-users.mocks";
import {DatoSnackbar} from "@datorama/core";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

describe('TestComponent', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let testService: TestService;
  let testDataService: TestDataService;
  let snackBar: DatoSnackbar;

  beforeEach(async () => {
    const module = extendDefaultModule(
      {
        providers: [
          {
            provide: TestDataService,
            useValue: dataServiceMock
          },
          TestService
        ],
        declarations: [TestComponent]
      });

    TestBed.configureTestingModule(module).compileComponents();
    testService = TestBed.get(TestService);
    snackBar = TestBed.get(DatoSnackbar);
    testDataService = TestBed.get(TestDataService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
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
    spyOn(testService, 'logoutUser').and.callThrough();
    spyOn(snackBar, 'info').and.callThrough();
    fixture.detectChanges();
    await fixture.whenStable();
    component.logoutUser();
    expect(testService.logoutUser).toHaveBeenCalled();
    expect(snackBar.info).toHaveBeenCalled();

  }));

  it('should show an error message on error', async(async () => {
    spyOn(testDataService, 'logoutUser').and.callFake(() => {
      return ErrorObservable.create('error');
    });
    spyOn(component, 'getSelectedRow').and.callFake(() => {
      return {
        id: 1
      };
    });
    spyOn(testService, 'logoutUser').and.callThrough();
    spyOn(snackBar, 'error').and.callThrough();
    fixture.detectChanges();
    await fixture.whenStable();
    component.logoutUser();
    expect(testService.logoutUser).toHaveBeenCalled();
    expect(snackBar.error).toHaveBeenCalled();

  }));

});
