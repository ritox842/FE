import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatoLoggedUsersComponent } from './logged-users.component';

const declerations = [DatoLoggedUsersComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [declerations],
  exports: [declerations]
})
export class DatoLoggedUsersModule {

}
