import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healing-04',
  templateUrl: './healing-04.component.html',
  styleUrls: [    
    '../../threads-base.scss',
    '../healing-base.scss',
    './healing-04.component.scss'
    ]
})
export class Healing04Component implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavForward(): void {
    this._router.navigate(['/healing-05']);
  }
  onNavBack(): void {
    this._router.navigate(['/healing-03']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
}
