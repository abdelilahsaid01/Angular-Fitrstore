import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
contact: Contact = {
  name: '',
  telephone: null
}
status: boolean=false
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }

  addContact() {
    this.contactService.addContact(this.contact)
    this.contact.name=null
    this.contact.telephone=null
    this.status=false
  
  }
}
