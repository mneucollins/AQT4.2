import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-community-03',
  templateUrl: './aids-community-03.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-community-base.scss',
        './aids-community-03.component.scss']
})
export class AidsCommunity03Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/aids-community-04']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-community-02']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
