import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-community-04',
  templateUrl: './aids-community-04.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-community-base.scss',
        './aids-community-04.component.scss']
})
export class AidsCommunity04Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/aids-community-05']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-community-03']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
