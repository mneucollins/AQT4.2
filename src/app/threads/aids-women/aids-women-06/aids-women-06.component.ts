import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-06',
  templateUrl: './aids-women-06.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-women-base.scss',
        './aids-women-06.component.scss'
    ]
})
export class AidsWomen06Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-07']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-05']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }

}
