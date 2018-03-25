import { Injectable } from "@angular/core";
import { {{pascalCase name}}DataService } from './{{dashCase name}}-data.service';

@Injectable()
export class {{pascalCase name}}Service {

  constructor(private {{camelCase name}}: {{pascalCase name}}DataService) {
  }

}
