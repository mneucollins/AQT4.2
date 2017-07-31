import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IPanelmaker } from '../interfaces/panelmaker';

@Injectable()

export class PanelmakerService{
    //replace this with an http api request to collective access
    private _getPanelmakerUrl = 'assets/api/the-quilt/panelmakers.json';
    private _blockId: number;

    constructor (private _http: Http){}

    getPanelmakerInfo( blockId ) : Observable<IPanelmaker[]>{
            return this._http.get(this._getPanelmakerUrl)
            .map((response:Response)=><IPanelmaker[]> response.json())
            .do (data=>console.log( 'ALL: '+JSON.stringify(data)))
            .catch (this.handleError);
    }  

    private handleError (error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

}