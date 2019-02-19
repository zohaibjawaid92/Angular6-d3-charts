import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';



@Injectable()
export class DataProvider {

  constructor(public http: HttpClient,
    private db:AngularFireDatabase ,
    private afStorage : AngularFireStorage) {
   
  }

  getFiles() {
    let ref = this.db.list('files');
    return ref.snapshotChanges().map(changes => {
      return changes.map(c => ({key : c.payload.key , ...c.payload.val()}));
    })
  }

  uploadToStorage(information) : AngularFireUploadTask {
    let newTask = `${new Date().getTime}.txt`;

    return this.afStorage.ref(`files/${newTask}`).putString(information);
  }

  storeInfoToDatabse(metainfo) {
    //let toSave = {
      // 'created' : metainfo.timeCreated,
      // url : metainfo.downloadURLs[0],
      // fullpath : metainfo.fullPath,
      // contentType : metainfo.contentType
    //}
    return this.db.list('files').push(metainfo);
  }
  deleteFile(file){
    // let key = file.key;
    // let storagePath = file.fullPath;

    this.db.list('files').remove(file);

    // Remove file from storage
    return this.afStorage.ref(file).delete();
  }

}
