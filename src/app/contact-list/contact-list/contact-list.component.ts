import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ContactListService } from 'src/app/core/contact-list.service';
import { PanelControlService } from '../panel-control.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  list$: Observable<any>;
  constructor(
    private contactListService: ContactListService,
    private router: Router,
    private panelControl: PanelControlService
  ) {
    this.list$ = this.contactListService.fetchContacts().pipe(
      tap((list) => {
        this.router.navigate([`contact-list/${list[0].id}`]);
      })
    );
  }

  ngOnInit(): void {}
  onShowDetailPanel() {
    this.panelControl.onShow();
  }
}
