import { Component, ApplicationRef } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-workers';

  constructor(
    swUpdate: SwUpdate,
    swPush: SwPush,
    app: ApplicationRef, snackbar: MatSnackBar) {

    swUpdate.available.subscribe(event => {
      console.log('UPDATE!');

      const snack = snackbar.open('New version of app is ready', 'Reload');
      snack.onAction().subscribe(_ => {
        swUpdate.activateUpdate().then(_ => document.location.reload());
      });

    });

    // app.isStable.subscribe
    // interval(1000 * 60 * 60);
    // swUpdate.checkForUpdate();


    swPush.messages.subscribe(message => {
      console.log(message);
    });

    const serverPublicKey = 'BNEO3LeLbUR2s3c9ooZ-JwUH_H20ZAw4XX808ObB4NIlVelmkyfIsLwICCbt1zg1ThtD6eUTPH1wnrRzWiKeXzo';
    swPush.requestSubscription({ serverPublicKey }).then(pushSubscription => {
      console.log(pushSubscription.toJSON());
    });

    /*
    Private Key: 
    */
  }
}
