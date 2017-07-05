import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-healing-09',
  templateUrl: './healing-09.component.html',
  styleUrls:   [
    '../../threads-base.scss',
    '../healing-base.scss',
    './healing-09.component.scss'
  ]
})
export class Healing09Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/healing-10']);
  }
  onNavBack(): void {
    this._router.navigate(['/healing-08']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }

}
