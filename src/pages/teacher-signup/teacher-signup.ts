import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../models/user';
import {AngularFireAuth} from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';



 

/**
 * Generated class for the TeacherSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-signup',
  templateUrl: 'teacher-signup.html',
})
export class TeacherSignupPage {
 
   user = {} as User;
  constructor(
    public alertCtrl: AlertController,
    private afAuth : AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherSignupPage');
  }

 async register(user : User){
   try {
   const result =  this.afAuth.auth.createUserWithEmailAndPassword(user.email , user.password);
  console.log(result); 
  }
   catch(e) {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'Somewthing Wrong!',
      buttons: ['OK']
    });
    alert.present(alert);
    //  console.error(e);
   }
  }

}
