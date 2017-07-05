import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-11',
  templateUrl: './aids-women-11.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-women-base.scss',
        './aids-women-11.component.scss'
    ]
})
export class AidsWomen11Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-12']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-10']);
  }
  onThreads(): void {
    this._router.navigate(['/threads']);
  }

}
