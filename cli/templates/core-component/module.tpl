import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dato{{pascalCase name}}Component } from './{{dashCase name}}.component';

const declerations = [Dato{{pascalCase name}}Component];

@NgModule({
  imports: [CommonModule],
  declarations: [declerations],
  exports: [declerations]
})
export class Dato{{pascalCase name}}Module {

}
