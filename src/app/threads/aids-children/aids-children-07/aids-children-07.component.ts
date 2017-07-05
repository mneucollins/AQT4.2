import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-children-07',
  templateUrl: './aids-children-07.component.html',
  styleUrls: [
    '../../threads-base.scss',
    '../aids-children-base.scss',
    './aids-children-07.component.scss'
  ]
})
export class AidsChildren07Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/aids-children-08']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-children-06']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
  
}
