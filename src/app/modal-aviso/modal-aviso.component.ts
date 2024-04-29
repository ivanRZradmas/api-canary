import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { AvisoService } from '../services/avisos.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'modal-aviso',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, FormsModule, CommonModule, MatListModule, MatCardModule, 
            MatDialogActions, MatButtonModule, MatDialogClose],
  templateUrl: './modal-aviso.component.html',
  styleUrl: './modal-aviso.component.scss',
  providers: [AvisoService]
})

export class ModalAvisoComponent implements OnInit {
  public aviso: any;

    constructor(
      private _snackBar: MatSnackBar,
      public dialog: MatDialog,
      @Inject(MAT_DIALOG_DATA) public data: any
    ){
        this.aviso = data.aviso;
    }
  
    ngOnInit(): void {
      
    }
}
