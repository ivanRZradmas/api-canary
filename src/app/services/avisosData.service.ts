import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { global } from "./global";
import { HttpClient } from "@angular/common/http";
import { Aviso, AvisoApi } from "../models/aviso";
import { SerializationService } from "./serialization.service";
import { AvisoService } from "./avisos.service";

@Injectable()

export class AvisoDataService implements OnInit{
    public subjectAvisos = new BehaviorSubject<Aviso[]>([]);
    public observableAvisos = this.subjectAvisos.asObservable();

    constructor(
        private _avisosService: AvisoService
    ){

    }

    ngOnInit(): void {
        
    }

    getDataAvisos(): void{
        this._avisosService.getAvisos().subscribe((avisos: Aviso[]) => {
            this.subjectAvisos.next(avisos);
        });
    }
}