{{#if core}}
/**
 * @license
 * Copyright Datorama. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License 2.0 license that can be
 * found in the LICENSE file at https://github.com/datorama/client-core/blob/master/LICENSE
 */
{{/if}}
import { Injectable } from "@angular/core";
import { {{pascalCase name}}DataService } from './{{dashCase name}}-data.service';

@Injectable()
export class {{pascalCase name}}Service {

  constructor(private {{camelCase name}}: {{pascalCase name}}DataService) {
  }

}
