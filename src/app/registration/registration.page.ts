import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage  {
  username: string = '';
  email: string = ''; 
  fechaNacimiento: string = '';
  password: string = '';
  confpassword: string = '';
  router: any;
  

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) { }

  enviarRegistro() {    
    
    const fechaNacimientoDate = new Date(this.fechaNacimiento);
    const hoy = new Date();
    hoy.setDate(hoy.getDate() - 1);
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    let mensajeError = '';
  
    if (this.username.length >= 3) {
      mensajeError = 'El nombre debe tener al menos 3 caracteres';
    } else if (!emailPattern.test(this.email)) {
      mensajeError = 'El correo electrónico no es válido';
    } else if (this.fechaNacimiento === '' || fechaNacimientoDate > hoy) {
      mensajeError = 'La fecha de nacimiento no es válida';
    } else if (this.password.length < 8) {
      mensajeError = 'La contraseña debe tener al menos 8 caracteres';
    } else if (this.password !== this.confpassword) {
      mensajeError = 'Las contraseñas no coinciden.';
    }
    if (mensajeError === '') {
      // Todos los campos son válidos, procede con el registro
      // Aquí debes implementar la lógica para guardar el usuario y la contraseña
  
      // Mostrar un mensaje de éxito
      this.mostrarToast('Registro exitoso');
  
      // Redirigir a la página de inicio de sesión u otra página necesaria
      this.navCtrl.navigateForward(['/login']);
    } else {
      // Mostrar un mensaje de error si los campos no cumplen con los requisitos
      this.mostrarToast(mensajeError);
    }
  }

   async mostrarToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
    } 
  home() {    
    this.router.navigate(['/home']);
  }
}