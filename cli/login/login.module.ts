import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';


const publicApi = [LoginComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [publicApi],
  exports: [publicApi]
})
export class LoginModule {
}
