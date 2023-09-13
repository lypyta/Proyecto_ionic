import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,ToastController  } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
  ) { }

  login() {
    // Expresión regular para validar la contraseña
    const passwordPattern = /^(?=.*\d{4})(?=.*[a-zA-Z]{3})(?=.*[A-Z]).{8,}$/;

    if (this.username.length >= 3 && this.username.length <= 8) {
      if (passwordPattern.test(this.password)) {

        this.router.navigate(['/bienvenido', { username: this.username }]);
      } else {
        this.showToast('La contraseña debe cumplir con los requisitos.');
      }
    } else {
      this.showToast('El nombre de usuario debe tener entre 3 y 8 caracteres.');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }
  
  bienvenido() {     
    this.router.navigate(['/bienvenido']);
  }
  home() {    
    this.router.navigate(['/home']);
  }
  forgoPassword() {    
    this.router.navigate(['/forgot-password']);
  }
  
}
