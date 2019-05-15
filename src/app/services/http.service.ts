import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  baseUrl:string = "http://www.colr.org/json/colors/random/7";

    constructor(private httpClient : HttpClient) {}

    getColors(){
        return this.httpClient.get(this.baseUrl);
    }
}
