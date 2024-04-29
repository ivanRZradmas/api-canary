import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { global } from "./global";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()

export class AvisoService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    getAvisos(limit: any, page: any): Observable<any>{
        return this._http.get(this.url + 'requests?limit=' + limit + '&page=' + page);
    }
}