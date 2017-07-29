import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IMemorialized } from '../interfaces/memorialized';
// import { PANELS } from './mock-panels';

@Injectable()

export class MemorializedService{
    //replace this with an http api request to collective access
    private _getMemorializedInfoUrl = 'assets/api/the-quilt/memorialized.json';

    constructor (private _http: Http){}

    getMemorializedInfo( blockId ) : Observable<IMemorialized[]>{
            return this._http.get(this._getMemorializedInfoUrl)
            .map((response:Response)=><IMemorialized[]> response.json())
            .do (data=>console.log( 'ALL: '+JSON.stringify(data)))
            .catch (this.handleError);
    }  

    private handleError (error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}
