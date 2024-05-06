import { Component, OnInit } from '@angular/core';
import { AvisoService } from '../services/avisos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MapaService } from '../services/mapa.service';
import { Aviso } from '../models/aviso';
import { Observable } from 'rxjs';
import { AvisoDataService } from '../services/avisosData.service';

@Component({
  selector: 'app-avisos',
  standalone: true,
  imports: [FormsModule, CommonModule, MatListModule, MatCardModule, MatButtonModule],
  templateUrl: './avisos.component.html',
  styleUrl: './avisos.component.scss',
  providers: [AvisoService, MapaService]
})

export class AvisosComponent implements OnInit {
  public avisos$: Observable<Aviso[]>;

  constructor(
    private _mapaService: MapaService,
    public dialog: MatDialog,
    private _avisosDataService: AvisoDataService
  ){
    
  }

  ngOnInit(): void {
    this.avisos$ = this._avisosDataService.observableAvisos;
  }

  openDialog(aviso: Aviso){
    this._mapaService.showAviso(aviso);
  }
}