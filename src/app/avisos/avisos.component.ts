import { Component, OnInit } from '@angular/core';
import { AvisoService } from '../services/avisos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MapaService } from '../services/mapa.service';

@Component({
  selector: 'app-avisos',
  standalone: true,
  imports: [FormsModule, CommonModule, MatListModule, MatCardModule, MatButtonModule],
  templateUrl: './avisos.component.html',
  styleUrl: './avisos.component.scss',
  providers: [AvisoService, MapaService]
})

export class AvisosComponent implements OnInit {
  public limit: number;
  public page: number;
  public avisos: any;

  constructor(
    private _avisoService: AvisoService,
    private _mapaService: MapaService,
    public dialog: MatDialog
  ){
    this.limit = 20;
    this.page = 1;
  }

  ngOnInit(): void {
    this.getAvisos();
  }

  getAvisos(){
    this._avisoService.getAvisos(this.limit, this.page).subscribe(
      response => {
        this.avisos = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialog(aviso: any){
    this._mapaService.showAviso(aviso);
  }

  getAviso(aviso: any){
    this._mapaService.sendAviso(aviso);
  }
}