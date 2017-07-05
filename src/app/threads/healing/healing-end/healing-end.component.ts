import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healing-end',
  templateUrl: './healing-end.component.html',
  styleUrls: [
    '../../threads-base.scss',
    '../healing-base.scss',
    './healing-end.component.scss'
  ]
})
export class HealingEndComponent implements OnInit {

  constructor ( private _router: Router){};

  ngOnInit() {
  }

  onNavBack(): void {
    this._router.navigate(['/healing-12']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }
}
