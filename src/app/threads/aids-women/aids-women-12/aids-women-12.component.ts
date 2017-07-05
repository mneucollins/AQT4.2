import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-12',
  templateUrl: './aids-women-12.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-women-base.scss',
        './aids-women-12.component.scss'
    ]
})
export class AidsWomen12Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-13']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-11']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
