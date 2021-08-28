import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PanelControlService } from './panel-control.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  translatValue$: Observable<string>;
  constructor(private panelControl: PanelControlService) {
    this.translatValue$ = this.panelControl.onShowDetail$;
  }

  ngOnInit(): void {}
  onClickBack() {}
}
