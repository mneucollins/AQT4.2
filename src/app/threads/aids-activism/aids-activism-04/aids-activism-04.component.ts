import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-aids-activism-04',
    templateUrl: './aids-activism-04.component.html',
    styleUrls: [
        '../../threads-base.scss',
        '../aids-activism-base.scss',
        './aids-activism-04.component.scss'
    ]
})

export class AidsActivism04Component implements OnInit {

    constructor ( private _router: Router){};

    ngOnInit() {
    }
    
    onNavForward(): void {
        this._router.navigate(['/aids-activism-05']);
    }
    onNavBack(): void {
        this._router.navigate(['/aids-activism-03']);
    }

    onThreads(): void {
      this._router.navigate(['/threads']);
    }

}
