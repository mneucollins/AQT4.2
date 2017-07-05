import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-children-04',
  templateUrl: './aids-children-04.component.html',
  styleUrls: [
    '../../threads-base.scss',
    '../aids-children-base.scss',
    './aids-children-04.component.scss'
  ]
})
export class AidsChildren04Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/aids-children-05']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-children-03']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
  
}
