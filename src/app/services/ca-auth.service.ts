import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {CA_CRED} from './ca-credentials-no-git';

@Injectable()
export class CaAuthService {
  http:Http;
  private testUrl = './mock-auth.json';

  constructor(http:Http) {
    this.http = http;
  }

  getAuthCode(): Observable<any[]> {
    //var url = "http://" + CA_CRED.user + ":" + CA_CRED.passwd + "@atecquilt.utdallas.edu/collectiveaccess/providence/service.php/auth/login";

    var url = "http://" + CA_CRED.user + ":" + CA_CRED.passwd + "@atecsandbox.utdallas.edu/collectiveaccess/testbed/providence-1.7.3/service.php/auth/login";
    console.log(CA_CRED.user);
    console.log(CA_CRED.passwd);

    var result = this.http
      .get(url)
      .map(res => res.json())
      .do (data => console.log( 'Auth: '+ JSON.stringify(data)))
      .catch (this.handleError);

    return result;
  }

getTestAuth(): Observable<any[]> {
  var url = "./mock-auth.json";

  var result = this.http
    .get(url)
    .map(res => res.json())
    .do (data => console.log( 'Auth: '+ JSON.stringify(data)))
    .catch (this.handleError);

  return result;
}

  private handleError (error:Response){
      console.error(error);
      return Observable.throw(error.json().error || 'Server Error');
  }


}
