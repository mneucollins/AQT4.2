import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healing-07',
  templateUrl: './healing-07.component.html',
  styleUrls:  [
    '../../threads-base.scss',
    '../healing-base.scss',
    './healing-07.component.scss'
  ]
})
export class Healing07Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/healing-08']);
  }
  onNavBack(): void {
    this._router.navigate(['/healing-06']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
}
