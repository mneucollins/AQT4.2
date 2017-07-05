import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-healing-10',
  templateUrl: './healing-10.component.html',
  styleUrls:   [
    '../../threads-base.scss',
    '../healing-base.scss',
    './healing-10.component.scss'
  ]
})
export class Healing10Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/healing-11']);
  }
  onNavBack(): void {
    this._router.navigate(['/healing-09']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
}
