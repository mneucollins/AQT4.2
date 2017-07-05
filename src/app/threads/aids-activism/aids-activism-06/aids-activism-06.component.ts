import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-activism-06',
  templateUrl: './aids-activism-06.component.html',
  styleUrls: [
      '../../threads-base.scss',
      '../aids-activism-base.scss',
      './aids-activism-06.component.scss'
  ]
})

export class AidsActivism06Component implements OnInit {

  constructor( private _router: Router ) { };

  ngOnInit() {
  }
  onNavForward(): void {
      this._router.navigate(['/aids-activism-07']);
  }
  onNavBack(): void {
      this._router.navigate(['/aids-activism-05']);
  }

  onThreads(): void {
      this._router.navigate(['/threads']);
  }

}
