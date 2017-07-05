import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healing-03',
  templateUrl: './healing-03.component.html',
  styleUrls: [
    '../../threads-base.scss',
    '../healing-base.scss',
    './healing-03.component.scss'
  ]
})
export class Healing03Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/healing-04']);
  }
  onNavBack(): void {
    this._router.navigate(['/healing-02']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
}
