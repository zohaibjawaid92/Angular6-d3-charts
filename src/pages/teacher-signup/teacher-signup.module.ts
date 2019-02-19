import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherSignupPage } from './teacher-signup';

@NgModule({
  declarations: [
    TeacherSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherSignupPage),
  ],
})
export class TeacherSignupPageModule {}
