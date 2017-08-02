import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-community-02',
  templateUrl: './aids-community-02.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-community-base.scss',
        './aids-community-02.component.scss']
})
export class AidsCommunity02Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/aids-community-03']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-community-01']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }
}
