import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';
import {User} from '../../models/user';
import {AngularFireAuth} from 'angularfire2/auth';

// import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;

  // Our translated text strings
  // private loginErrorString: string;

  constructor(public navCtrl: NavController,
    private afAuth : AngularFireAuth,
    public toastCtrl: ToastController,
    public translateService: TranslateService , public alertCtrl: AlertController,) {

    // this.translateService.get('LOGIN_ERROR').subscribe((value) => {
    //   this.loginErrorString = value;
    // })
  }

  async doLogin(user : User) {
    try {
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    console.log(result);
    if(result){
      this.navCtrl.setRoot(MainPage);
    }else {
      this.navCtrl.setRoot('LoginPage');
    } 
    }
      catch(e) {
        const alert = this.alertCtrl.create({
          title: 'Login error',
          subTitle: 'Somewthing Wrong!',
          buttons: ['OK' , 'CANCEL']
        });
        alert.present(alert);
        //  console.error(e);
       
    }
  //   this.user.login(this.account).subscribe((resp) => {
  //     this.navCtrl.push(MainPage);
  //   }, (err) => {
  //     this.navCtrl.push(MainPage);
  //     // Unable to log in
  //     let toast = this.toastCtrl.create({
  //       message: this.loginErrorString,
  //       duration: 3000,
  //       position: 'top'
  //     });
  //     toast.present();
  //   });
  // }
  }

  signupClick(){
    this.navCtrl.push('TeacherSignupPage');
  }
}
