{{#if core}}
/**
 * @license
 * Copyright Datorama. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License 2.0 license that can be
 * found in the LICENSE file at https://github.com/datorama/client-core/blob/master/LICENSE
 */
{{/if}}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
{{#if platform}}
import { {{pascalCase name}}Component } from './{{dashCase name}}.component';
{{else}}
import { Dato{{pascalCase name}}Component } from './{{dashCase name}}.component';
{{/if}}


{{#if platform}}
const publicApi = [{{pascalCase name}}Component];
{{else}}
const publicApi = [Dato{{pascalCase name}}Component];
{{/if}}

@NgModule({
  imports: [CommonModule],
  declarations: [publicApi],
  exports: [publicApi],
  entryComponents: [publicApi]
})
{{#if platform}}
export class {{pascalCase name}}Module {
{{else}}
export class Dato{{pascalCase name}}Module {
{{/if}}
}
