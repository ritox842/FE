import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import { {{pascalCase name}}Component } from "./{{dashCase name}}.component";

describe('{{pascalCase name}}Component', () => {

  let component: {{pascalCase name}}Component;
  let fixture: ComponentFixture<{{pascalCase name}}Component>;

  beforeEach(async () => {
    const module = extendDefaultModule(
      {
        imports: [],
        providers: [],
        declarations: [{{pascalCase name}}Component]
      });

    TestBed.configureTestingModule(module).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent({{pascalCase name}}Component);
    component = fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });


});
