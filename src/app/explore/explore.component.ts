import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './explore.component.html',
    styleUrls: [
        './explore-base.scss',
        './explore.component.scss'
    ]
})

export class ExploreComponent{
    constructor ( private _router: Router){};

    onExploreTheQuilt(): void {
        this._router.navigate(['/explore_the_quilt']);
    }

    onExploreTheStories(): void {
        this._router.navigate(['/threads']);
    }


}
