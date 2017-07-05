import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-children-08',
  templateUrl: './aids-children-08.component.html',
  styleUrls: [
    '../../threads-base.scss',
    '../aids-children-base.scss',
    './aids-children-08.component.scss'
  ]
})
export class AidsChildren08Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/aids-children-09']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-children-07']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
  
}
