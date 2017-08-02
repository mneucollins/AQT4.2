import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-community-08',
  templateUrl: './aids-community-08.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-community-base.scss',
        './aids-community-08.component.scss']
})
export class AidsCommunity08Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/aids-community-end']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-community-07']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
