import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-community-01',
  templateUrl: './aids-community-01.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-community-base.scss',
        './aids-community-01.component.scss']
})
export class AidsCommunity01Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {}
    
  onNavForward(): void {
    this._router.navigate(['/aids-community-02']);
  }
  // onNavBack(): void {
  //   this._router.navigate(['/aids-community-04']);
  // }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }
}
