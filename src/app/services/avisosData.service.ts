import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Aviso } from "../models/aviso";
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