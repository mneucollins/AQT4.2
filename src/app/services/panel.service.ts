import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IPanel } from '../interfaces/panel';
// import { PANELS } from './mock-panels';

@Injectable()

export class PanelService{
    //replace this with an http api request to collective access
    private _getPanelInfoUrl = 'assets/api/the-quilt/panels.json';

    constructor (private _http: Http){}

    getPanelInfo( blockId ) : Observable<IPanel[]>{
            return this._http.get(this._getPanelInfoUrl)
            .map((response:Response)=><IPanel[]> response.json())
            .do (data=>console.log( 'ALL: '+JSON.stringify(data)))
            .catch (this.handleError);
    }  

    private handleError (error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}


//   not used:
//     getRandomPanel(): HTMLImageElement {
//       return PANELS[Math.round(Math.random() * (PANELS.length - 1))];
//   }
