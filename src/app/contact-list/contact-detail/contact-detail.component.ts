import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactListService } from 'src/app/core/contact-list.service';
import { switchMap } from 'rxjs/operators';
import { PanelControlService } from '../panel-control.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent implements OnInit {
  detail$: Observable<any>;
  translateValue = 100;
  constructor(
    private ContactListService: ContactListService,
    private activedRoute: ActivatedRoute,
    private panelControlService: PanelControlService
  ) {
    this.detail$ = this.activedRoute.params.pipe(
      switchMap((param) => {
        return this.ContactListService.fetchDetail(+param.id);
      })
    );
  }

  ngOnInit(): void {}

  onHide() {
    this.panelControlService.onHide();
  }
}
