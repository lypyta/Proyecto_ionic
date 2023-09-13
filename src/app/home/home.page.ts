import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,ToastController  } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

  
})
export class HomePage {
 
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
  ) {} 
  
  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }

  registration() {     
    this.router.navigate(['/registration']);
  }
  login() {      
    this.router.navigate(['/login']);
  }

}
