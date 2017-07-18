import { Component, OnInit } from '@angular/core';
import { IBlock } from '../interfaces/block';
import { BlockService } from '../services/block.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './viewblock.component.html',
    styleUrls: [
        'explore-base.scss',
        './viewblock.component.scss'
    ]
})

export class ViewBlockComponent implements OnInit {
    blocks: IBlock[];
    errorMessage: string;

    constructor ( private _router: Router,
                 private _blockService: BlockService ){};
    ngOnInit(): void {

//note I want to get only 1 block but having trouble with that        
        this._blockService.getBlocks()
            .subscribe (blocks=>this.blocks = blocks,
                error => this.errorMessage = <any>error );
        
    }

}