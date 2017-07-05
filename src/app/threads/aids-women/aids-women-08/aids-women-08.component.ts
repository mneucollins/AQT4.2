import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-08',
  templateUrl: './aids-women-08.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-women-base.scss',
        './aids-women-08.component.scss'
    ]
})
export class AidsWomen08Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-09']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-07']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
