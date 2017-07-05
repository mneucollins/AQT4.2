import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-13',
  templateUrl: './aids-women-13.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-women-base.scss',
        './aids-women-13.component.scss'
    ]
})
export class AidsWomen13Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-end']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-12']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
