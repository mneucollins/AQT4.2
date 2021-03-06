import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-aids-activism-05',
  templateUrl: './aids-activism-05.component.html',
  styleUrls: [
        '../../threads-base.scss',
        '../aids-activism-base.scss',
        './aids-activism-05.component.scss']
  })

export class AidsActivism05Component implements OnInit {

  constructor( private _router: Router ) { };

  ngOnInit() {
  }
  
  onNavForward(): void {
      this._router.navigate(['/aids-activism-06']);
  }
  onNavBack(): void {
      this._router.navigate(['/aids-activism-04']);
  }

  onThreads(): void {
      this._router.navigate(['/threads']);
  }

}
