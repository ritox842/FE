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
  exports: [publicApi]
})
{{#if platform}}
export class {{pascalCase name}}Module {
{{else}}
export class Dato{{pascalCase name}}Module {
{{/if}}
}
