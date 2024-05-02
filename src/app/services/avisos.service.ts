import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { global } from "./global";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class AvisoService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    getAvisos(limit: number, page: number): Observable<any>{
        return this._http.get(this.url + 'requests?limit=' + limit + '&page=' + page);
    }
}