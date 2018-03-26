import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import { {{pascalCase name}}Component } from "./{{dashCase name}}.component";
import { {{pascalCase name}}DataService } from "./{{dashCase name}}-data.service";
import { {{pascalCase name}}Service} from "./{{dashCase name}}.service";
import {extendDefaultModule, getGridHeaderComponent, getGridHeaderComponentText} from "@datorama/tests/utils";
import {dataServiceMock} from "./logged-users.mocks";
import {DatoSnackbar} from "@datorama/core";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

describe('{{pascalCase name}}Component', () => {

  let component: {{pascalCase name}}Component;
  let fixture: ComponentFixture<{{pascalCase name}}Component>;
  let {{camelCase name}}Service: {{pascalCase name}}Service;
  let {{camelCase name}}DataService: {{pascalCase name}}DataService;
  let snackBar: DatoSnackbar;

  beforeEach(async () => {
    const module = extendDefaultModule(
      {
        providers: [
          {
            provide: {{pascalCase name}}DataService,
            useValue: dataServiceMock
          },
          {{pascalCase name}}Service
        ],
        declarations: [{{pascalCase name}}Component]
      });

    TestBed.configureTestingModule(module).compileComponents();
    {{camelCase name}}Service = TestBed.get({{pascalCase name}}Service);
    snackBar = TestBed.get(DatoSnackbar);
    {{camelCase name}}DataService = TestBed.get({{pascalCase name}}DataService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent({{pascalCase name}}Component);
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
    spyOn(component, 'getSelectedRows').and.callFake(() => {
      return {
        token: 'token'
      };
    });
    spyOn({{camelCase name}}Service, 'logoutUser').and.callThrough();
    spyOn(snackBar, 'info').and.callThrough();
    fixture.detectChanges();
    await fixture.whenStable();
    component.logoutUser();
    expect({{camelCase name}}Service.logoutUser).toHaveBeenCalled();
    expect(snackBar.info).toHaveBeenCalled();

  }));

  it('should show an error message on error', async(async () => {
    spyOn({{camelCase name}}DataService, 'logoutUser').and.callFake(() => {
      return ErrorObservable.create('error');
    });
    spyOn(component, 'getSelectedRows').and.callFake(() => {
      return {
        id: 1
      };
    });
    spyOn({{camelCase name}}Service, 'logoutUser').and.callThrough();
    spyOn(snackBar, 'error').and.callThrough();
    fixture.detectChanges();
    await fixture.whenStable();
    component.logoutUser();
    expect({{camelCase name}}Service.logoutUser).toHaveBeenCalled();
    expect(snackBar.error).toHaveBeenCalled();

  }));

});
