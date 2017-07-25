import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlockService } from '../../services/block.service';
import { IBlock } from '../../interfaces/block';


@Component({
    templateUrl: './explorequilt.component.html',
    styleUrls: [
        '../explore-base.scss',
        './explorequilt.component.scss'
    ]
})

export class ExploreQuiltComponent{
    errorMessage:string;
    // block:IBlock;
    randomBlock:IBlock;
    //blocks:IBlock[];

    constructor ( private _router: Router,private _blockService: BlockService){}

    onRandom(): void {
        // this._router.navigate(['/view_random']);
        // Note, the following does not work because subscribing is asynchronous
        //and does not return the value immediately. Need to look into the best way
        // wait for an answer before continuing.
        // Since this is not final code,  will mock it up for now
        
        // this._blockService.getRandomBlock()
        //     .subscribe(
        //         block => this.randomBlock = block,
        //         error => this.errorMessage = <any>error
        //     );
        // console.log("thisblock",this.randomBlock);
        // alert (this.randomBlock.blockId);
        // the alert shows no value 
        
        let blockIds : number[] = [1908,3663,3734,5427,5552];
        let randomBlock: number = blockIds[this._blockService.getRandomIntInclusive(0,4)]
        
        alert (randomBlock);
        //let route = '/block-view/'+this.randomBlock
        //console.log(route);
        this._router.navigate(['/block',randomBlock]);
    }

    takeTour(): void {
        this._router.navigate(['/take_a_tour']);
    }

    findName(): void {
        this._router.navigate(['/find_a_name']);
    }
}
