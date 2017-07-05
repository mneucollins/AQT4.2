import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-children-03',
  templateUrl: './aids-children-03.component.html',
  styleUrls: [
    '../../threads-base.scss',
    '../aids-children-base.scss',
    './aids-children-03.component.scss'
  ]
})
export class AidsChildren03Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/aids-children-04']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-children-02']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
  
}
