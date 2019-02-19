import { Component, OnInit } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';
import { DataProvider } from '../../providers/data/data';
import { Observable } from 'rxjs';
// import { AngularFireDatabase } from 'angularfire2/database';
// import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage implements OnInit {
  currentItems: Item[];
  files : Observable<any[]>
  dummy : any;

  

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController,
    private dataProvider : DataProvider,
    private toastCtrl : ToastController) {
    this.currentItems = this.items.query();
    this.files = this.dataProvider.getFiles();
    this.getDataFromFireBase();
  }
 
 
  ionViewDidLoad() {
  }

 ngOnInit() {
 
 }


 getDataFromFireBase(){
  // this.afd.object('files/').valueChanges().subscribe( data => {
  //   console.log(data);
  //   this.dummy = data;
  //   console.log(this.dummy);
  // })
  // firebase.database().ref().child('files').on('value', function(snapshot) {
  //   snapshot.forEach(function(child) {
  //   var datas = child.val();
  //    var name =child.val().name;
  //    var about =child.val().about;
  //     });
  //   });
 
 }

  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }


  // deleteFile(file) {
  //   this.dataProvider.deleteFile(file).subscribe(() => {
  //     let toast = this.toastCtrl.create({
  //       message : 'File Removed',
  //       duration : 3000
  //     });
  //     toast.present();
  //   })
  // }
 
 
 

 
  deleteItem(file) {
    this.dataProvider.deleteFile(file).subscribe(() => {
      let toast = this.toastCtrl.create({
        message : 'File Removed',
        duration : 3000
      });
      toast.present();
      //  clearInterval();
    })
  }


  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
