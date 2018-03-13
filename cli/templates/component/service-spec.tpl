import { TestBed } from '@angular/core/testing';
import { {{pascalCase name}}Service} from "./{{dashCase name}}.service";

describe('{{pascalCase name}}Service', () => {
  let {{camelCase name}}Service : {{pascalCase name}}Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });

    {{camelCase name}}Service = TestBed.get({{pascalCase name}}Service);
  });


  it('should...', () => {
    expect({{camelCase name}}Service).toEqual('Datorama');
  });

});
