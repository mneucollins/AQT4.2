import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-children-05',
  templateUrl: './aids-children-05.component.html',
  styleUrls: [
    '../../threads-base.scss',
    '../aids-children-base.scss',
    './aids-children-05.component.scss'
  ]
})
export class AidsChildren05Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/aids-children-06']);
  }
  onNavBack(): void {
    this._router.navigate(['/aids-children-04']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
  
}
