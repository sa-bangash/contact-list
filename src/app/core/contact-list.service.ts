import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root',
})
export class ContactListService {
  constructor() {}
  fetchContacts() {
    return of(Data);
  }
  fetchDetail(id: number) {
    return of(Data.find((contact) => contact.id === id));
  }
}
