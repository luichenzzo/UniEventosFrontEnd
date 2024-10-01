  import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit() {
    // Aquí iría la lógica para manejar el inicio de sesión
    console.log('Login submitted', {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    });
  }
}


