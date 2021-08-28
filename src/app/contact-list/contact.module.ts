import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactListSearchComponent } from './contact-list-search/contact-list-search.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    children: [
      {
        path: ':id',
        component: ContactDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
class ContactRoutingModule {}

@NgModule({
  declarations: [
    ContactComponent,
    ContactListComponent,
    ContactListSearchComponent,
    ContactDetailComponent,
  ],
  imports: [CommonModule, ContactRoutingModule],
})
export class ContactModule {}
