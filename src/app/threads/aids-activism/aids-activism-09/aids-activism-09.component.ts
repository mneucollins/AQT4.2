import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-activism-09',
  templateUrl: './aids-activism-09.component.html',
  styleUrls: [
    '../../threads-base.scss',
    '../aids-activism-base.scss',
    './aids-activism-09.component.scss'
    ]
})
export class AidsActivism09Component implements OnInit {

  constructor( private _router: Router ) { };

  ngOnInit() {
  }
  onNavForward(): void {
      this._router.navigate(['/aids-activism-end']);
  }
  onNavBack(): void {
      this._router.navigate(['/aids-activism-08']);
  }

  onThreads(): void {
      this._router.navigate(['/threads']);
  }

}
