import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-community-07',
  templateUrl: './aids-community-07.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-community-base.scss',
        './aids-community-07.component.scss']
})
export class AidsCommunity07Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

    onNavForward(): void {
    this._router.navigate(['/aids-community-08']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-community-06']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
