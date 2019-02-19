import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentSignupPage } from './student-signup';

@NgModule({
  declarations: [
    StudentSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentSignupPage),
  ],
})
export class StudentSignupPageModule {}
