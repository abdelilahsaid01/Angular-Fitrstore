import { Contact } from './../models/contact';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

contactDoc:AngularFirestoreDocument<Contact>  //Récupérer le document
contactsCollection:AngularFirestoreCollection<Contact>  //C'est une fonction generique en met le model(interface ou entity)
contacts: Observable<Contact[]>  
constructor(private afs: AngularFirestore) { 
   this.contactsCollection= this.afs.collection('contacts')   //saisir le nom de la collection/Récupérer la collection
 //this.contacts=  this.contactsCollection.valueChanges() //Récupérer les valures de la collections sans ID!!
 this.contacts=  this.contactsCollection.snapshotChanges().pipe(  //Récupérer la liste avec ID
  map(actions => actions.map(a => {
    const data = a.payload.doc.data() as Contact;
    const id = a.payload.doc.id;
    return { id, ...data };
  }))
);
  }

  getContacts() {
    return this.contacts;
  }

  addContact(contact:Contact) {
   this.contactsCollection.add(contact)
  }

  updateContact(contact:Contact)  {
    this.contactDoc=this.contactsCollection.doc<Contact>(contact.id)  //Récupérationdy document à partir de la collection
    this.contactDoc.update(contact)
  }

  deleteContact(contact:Contact)  {
    this.contactDoc=this.contactsCollection.doc<Contact>(contact.id)  //Récupérationdy document à partir de la collection
    this.contactDoc.delete()
  }
  
}

