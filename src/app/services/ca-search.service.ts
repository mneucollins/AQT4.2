import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//These are the user-visible search types this service provides to external modules.
//The most prominent use of this variable is populating the Find page search form.
//This should not include functions that are used internally to get extra data.
export const queryTypes = ["Name", "Maker Name", "Block ID"];

//Internal Constants for CA Search
//external URL
const ca_base:string = "http://atecquilt.utdallas.edu/collectiveaccess/providence/service.php/find/";
//sandbox URL
const ca_testbase:string = "http://quilt.utdallas.edu/collectiveaccess/providence/service.php/find/";
const ca_tables = {
  //We could generate queryTypes from these keys for greter automation, but this table may hold
  //more query types than we make publicly visible

  //replace this with a Map object in future
  name: "",
  year: "",
  maker: "",
  city: "",
  block: "",
  panel: "",
  test: "ca_objects/"
};

const ca_begin_search = "?pretty=1&q="; //universal search start term; to be followed by query string
const browse_term = "*"; //universal browsing term



//Test-related data
export interface TestRecord {
  id:number,
  username:string,
  name:string,
  phone:string,
  website:string
}

@Injectable()
export class CaSearchService {

  http:Http;
  //auth: String;

  response:any;



  constructor(http:Http) {
    this.http = http;
  }

  getTestResults(): Observable<TestRecord[]> {
    var results = this.http
      .get('http://jsonplaceholder.typicode.com/users')
      .map(res => <TestRecord[]>res.json())
      //.subscribe(res => {
      //  this.response = res;
      //});
      .do (data => console.log( 'JSON: '+ JSON.stringify(data)))
      .catch (this.handleError);

      return results;
  }

  getSearchResults(querytype:string, querystring:string):Observable<any[]> {
    //This function specifically manages searching from the Find page
    var search_term = "*" + querystring + "*";
    var url = ca_testbase + ca_tables.test + ca_begin_search + browse_term;
    //var url = ca_base + ca_tables.test + ca_begin_search + search_term;

    var result = this.http
      .get(url)
      .map(res => res.json())
      .do (data => console.log( 'JSON: '+ JSON.stringify(data)))
      .catch (this.handleError);

    return result;
  }

  getMedia():string {
    //return media URL
    var url = ca_testbase + ca_tables.test + ca_begin_search + browse_term;


    return "";
  }

  private handleError (error:Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
