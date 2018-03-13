import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';


const declerations = [LoginComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [declerations],
  exports: [declerations]
})
export class LoginModule {
}
