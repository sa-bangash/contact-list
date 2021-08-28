import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanelControlService {
  private onShowDetailSource = new Subject<string>();
  onShowDetail$ = this.onShowDetailSource.asObservable();
  constructor() {}
  onHide() {
    this.onShowDetailSource.next('100%');
  }
  onShow() {
    this.onShowDetailSource.next('0');
  }
}
