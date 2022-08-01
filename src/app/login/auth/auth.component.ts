import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  usuario = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  userLogged = this.authService.getUserLogged();
  ingresar() {
    const { email, password } = this.usuario;
    this.authService.register(email, password).then((resp) => {
      console.log('Se registro: ', resp);
    });
  }
  ingresarGoogle() {
    const { email, password } = this.usuario;
    this.authService.loginWithGoogle(email, password).then((resp) => {
      console.log('Se registro: ', resp);
    });
  }
  obtenerUsuarioLogado() {
    this.authService.getUserLogged().subscribe((resp) => {
      console.log(resp);
    });
  }
  logout() {
    this.authService.logout();
  }
  ngOnInit(): void {}
}
