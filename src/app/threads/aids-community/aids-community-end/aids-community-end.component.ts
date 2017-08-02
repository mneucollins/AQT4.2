import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-community-end',
  templateUrl: './aids-community-end.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-community-base.scss',
        './aids-community-end.component.scss']
})
export class AidsCommunityEndComponent implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  // onNavForward(): void {
  //   this._router.navigate(['/aids-community-03']);
  // }
  onNavBack(): void {
    this._router.navigate(['/aids-community-08']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }
}
