import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IBlock } from '../interfaces/block';

@Injectable()

export class BlockService{
    //replace this with an http api request to collective access
    private _getBlockUrl = 'assets/api/the-quilt/blocks.json';
    private _random : number;
    private _blockId: number;

    constructor (private _http: Http){}

    //getblocks holds the api call
    getBlocks(): Observable<IBlock[]>{
        return this._http.get(this._getBlockUrl)
            .map((response:Response)=><IBlock[]> response.json())
            .do (data=>console.log( 'ALL: '+JSON.stringify(data)))
            .catch (this.handleError);
    }

    getBlock(blockId: number): Observable<IBlock> {
        //takes a parameter and returns the block info     
        return this.getBlocks()
            .map((blocks: IBlock[]) => blocks.find(b => b.blockId === blockId))
            .do (data=>console.log( 'BLOCK: '+JSON.stringify(data)))
            .catch (this.handleError);
    }

    getRandomBlock(): Observable<IBlock> {
        //stub function selects a random block from the list in the blocks.json file
        //final function should select a random block from CA
        let blockIds : number[] = [1908,3663,3734,5427,5552];
        let blockId : number = blockIds[this.getRandomIntInclusive(0,4)];
        console.log (blockId);
        return this.getBlock(blockId);
    }

    getRandomIntInclusive(min: number, max:number) {
        //return an integer between min and max inclusive
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private handleError (error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}