import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aids-children-01',
  templateUrl: './aids-children-01.component.html',
  styleUrls: [
    '../../threads-base.scss',
    '../aids-children-base.scss',
    './aids-children-01.component.scss'
  ]
})
export class AidsChildren01Component implements OnInit {
  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/aids-children-02']);
  }
  // onNavBack(): void {
  //   this._router.navigate(['/aids-children-01']);
  // }
  // onThreads(): void {
  //     this._router.navigate(['/threads']);
  // }
}
