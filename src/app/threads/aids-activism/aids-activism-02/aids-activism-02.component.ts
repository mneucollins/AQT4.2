import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aids-activism-02',
  templateUrl: './aids-activism-02.component.html',
  styleUrls: [
    '../../threads-base.scss',
    '../aids-activism-base.scss',
    './aids-activism-02.component.scss'
    ]
})
export class AidsActivism02Component implements OnInit {

  constructor(private _router: Router) { }

    ngOnInit() {
    }
    
    onNavForward(): void {
        this._router.navigate(['/aids-activism-03']);
    }
    
    onNavBack(): void {
        this._router.navigate(['/aids-activism-01']);
    }

    onThreads(): void {
      this._router.navigate(['/threads']);
    }


}
