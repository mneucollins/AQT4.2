import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healing-11',
  templateUrl: './healing-11.component.html',
  styleUrls: [
    '../../threads-base.scss',
    '../healing-base.scss',
    './healing-11.component.scss'
  ]
})
export class Healing11Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/healing-12']);
  }
  onNavBack(): void {
    this._router.navigate(['/healing-10']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }



}
