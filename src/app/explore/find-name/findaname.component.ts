import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './findaname.component.html',
    styleUrls: [
        '../explore-base.scss',
        './findaname.component.scss'
    ]
})

export class FindANameComponent{
    constructor ( private _router: Router){};
    
    onFindName(): void {}
    

    onMoreOptions(): void {
        this._router.navigate(['/find_more_options']);
    }


}