import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CitasComponent } from './pages/citas/citas.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatModule } from './chat/chat.module';
import { LoginModule } from './login/login.module';
import { AngularFireModule } from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: 'AIzaSyAOGMlitGCFHGXfcFGuYZbqqkFYa5ilqSM',
  authDomain: 'salpicamaschat.firebaseapp.com',
  projectId: 'salpicamaschat',
  storageBucket: 'salpicamaschat.appspot.com',
  messagingSenderId: '1027683488106',
  appId: '1:1027683488106:web:1f03d2f480788fef3dd513',
  measurementId: 'G-VJP18S9X59',
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CitasComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChatModule,
    LoginModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
