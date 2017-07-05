import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healing-12',
  templateUrl: './healing-12.component.html',
  styleUrls: [
    '../../threads-base.scss',
    '../healing-base.scss',
    './healing-12.component.scss'
  ]
})

export class Healing12Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/healing-end']);
  }
  onNavBack(): void {
    this._router.navigate(['/healing-11']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
}
