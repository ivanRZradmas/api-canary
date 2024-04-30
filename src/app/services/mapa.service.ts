import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalAvisoComponent } from "../modal-aviso/modal-aviso.component";
import { Aviso } from "../models/aviso";

@Injectable()

export class MapaService{
    constructor(
        public dialog: MatDialog
    ){

    }

    showAviso(aviso: Aviso){
        this.dialog.open(ModalAvisoComponent, {
            data: {aviso}
        });
    }
}