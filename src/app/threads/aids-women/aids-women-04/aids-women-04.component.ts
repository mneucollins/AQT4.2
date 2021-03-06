import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-women-04',
  templateUrl: './aids-women-04.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-women-base.scss',
        './aids-women-04.component.scss'
    ]
})
export class AidsWomen04Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/aids-women-05']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-women-03']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }

}
