import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import { LoginComponent } from "./login.component";

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    const module = extendDefaultModule(
      {
        imports: [],
        providers: [],
        declarations: [LoginComponent]
      });

    TestBed.configureTestingModule(module).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });


});
