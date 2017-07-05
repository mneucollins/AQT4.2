import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healing-05',
  templateUrl: './healing-05.component.html',
  styleUrls: [
    '../../threads-base.scss',
    '../healing-base.scss',
    './healing-05.component.scss'
]
})
export class Healing05Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }
  onNavForward(): void {
    this._router.navigate(['/healing-06']);
  }
  onNavBack(): void {
    this._router.navigate(['/healing-04']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }  
}
