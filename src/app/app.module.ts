import { ContactService } from './services/contact.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2'; //Permet d'établir la connection entre l'application et la base de donnée
import{AngularFirestoreModule} from 'angularfire2/firestore';
import { NavbarComponent } from './omponents/navbar/navbar.component';
import { ListContactsComponent } from './omponents/list-contacts/list-contacts.component';
import { AddContactsComponent } from './omponents/add-contacts/add-contacts.component'  //Manipuler les données
import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListContactsComponent,
    AddContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
