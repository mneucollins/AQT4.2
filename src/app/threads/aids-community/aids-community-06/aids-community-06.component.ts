import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-community-06',
  templateUrl: './aids-community-06.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-community-base.scss',
        './aids-community-06.component.scss']
})
export class AidsCommunity06Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-community-07']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-community-05']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
