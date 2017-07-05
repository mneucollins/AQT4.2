import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-activism-end',
  templateUrl: './aids-activism-end.component.html',
  styleUrls:  [
    '../../threads-base.scss',
    '../aids-activism-base.scss',
    './aids-activism-end.component.scss'
    ]
})
export class AidsActivismEndComponent implements OnInit {

  constructor( private _router: Router ) { };

  ngOnInit() {
  }

  onNavBack(): void {
      this._router.navigate(['/aids-activism-08']);
  }
  onThreads(): void {
      this._router.navigate(['/threads']);
  }

}
