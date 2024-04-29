import { Component, Inject, Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { global } from "./global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { AvisoService } from "./avisos.service";
import { ModalAvisoComponent } from "../modal-aviso/modal-aviso.component";

@Injectable()

export class MapaService{
    public url: string;
    private avisoSubject = new BehaviorSubject<any>(null);
    avisoObservable = this.avisoSubject.asObservable();

    constructor(
        private _http: HttpClient,
        public dialog: MatDialog
    ){
        this.url = global.url;
    }

    sendAviso(aviso: any){
        this.avisoSubject.next(aviso);
    }

    getAviso(){
        return this.avisoObservable;
    }

    showAviso(aviso: any){
        this.dialog.open(ModalAvisoComponent, {
            data: {aviso}
        });
    }

    getLayers(limit: any, page: any):Observable<any>{
        return this._http.get(this.url + 'requests?limit=' + limit + '&page=' + page);
    }
}