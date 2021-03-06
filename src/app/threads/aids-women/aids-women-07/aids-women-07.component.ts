import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-07',
  templateUrl: './aids-women-07.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-women-base.scss',
        './aids-women-07.component.scss'
    ]
})
export class AidsWomen07Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-08']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-06']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
