import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
{{#if platform}}
import { {{pascalCase name}}Component } from './{{dashCase name}}.component';
{{else}}
import { Dato{{pascalCase name}}Component } from './{{dashCase name}}.component';
{{/if}}


{{#if platform}}
const declerations = [{{pascalCase name}}Component];
{{else}}
const declerations = [Dato{{pascalCase name}}Component];
{{/if}}

@NgModule({
  imports: [CommonModule],
  declarations: [declerations],
  exports: [declerations]
})
{{#if platform}}
export class {{pascalCase name}}Module {
{{else}}
export class Dato{{pascalCase name}}Module {
{{/if}}
}
