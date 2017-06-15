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
    private _blockUrl = 'api/blocks/blocks.json';

    constructor (private _http: Http){}

    //getblocks holds the api call
    getBlocks(): Observable<IBlock[]>{
        return this._http.get(this._blockUrl)
            .map((response:Response)=><IBlock[]> response.json())
            .do (data=>console.log( 'ALL: '+JSON.stringify(data)))
            .catch (this.handleError);
    }

    getBlock(blockId: number): Observable<IBlock> {
        //takes a parameter and returns the block info     
        return this.getBlocks()
            .map((blocks: IBlock[]) => blocks.find(b => b.blockId === blockId));;
    }

    private handleError (error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}