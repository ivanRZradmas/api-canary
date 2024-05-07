import { Injectable, OnInit } from "@angular/core";
import { Observable, map } from "rxjs";
import { global } from "./global";
import { HttpClient } from "@angular/common/http";
import { Aviso, AvisoApi } from "../models/aviso";
import { SerializationService } from "./serialization.service";

@Injectable()

export class AvisoService implements OnInit{
    public url: string;
    public limit: number;
    public page: number;

    constructor(
        private _http: HttpClient,
        private _serializationService: SerializationService
    ){
        this.url = global.url;
        this.limit = 20;
        this.page = 1;
    }

    ngOnInit(): void {
        
    }

    getAvisos(): Observable<Aviso[]> {
        return this._http.get<AvisoApi[]>(this.url + 'requests?limit=' + this.limit + '&page=' + this.page).pipe(map(this._serializationService.deserializeList));
    }
}