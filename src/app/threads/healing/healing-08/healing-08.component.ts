import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healing-08',
  templateUrl: './healing-08.component.html',
  styleUrls:  [
    '../../threads-base.scss',
    '../healing-base.scss',
    './healing-08.component.scss'
  ]
})
export class Healing08Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/healing-09']);
  }
  onNavBack(): void {
    this._router.navigate(['/healing-07']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
}
