import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  constructor(private contactService: ContactService) { }
//contacts:Contact[]  Optionnele
contacts
Mycontacts;
statusUpdate:boolean=false
  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contactss => {
this.contacts=contactss
console.log(this.contacts)
    })
  }

  updateContact(contact) {
    this.contactService.updateContact(contact)
    this.statusUpdate=false
  }

  deleteContact(contact) {
    this.contactService.deleteContact(contact)

  }
  statusContact(contact) {
    this.statusUpdate=true
    this.Mycontacts=contact
  }
}
