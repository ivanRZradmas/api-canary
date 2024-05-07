import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvisosComponent } from './avisos/avisos.component';
import { MapaComponent } from './mapa/mapa.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SerializationService } from './services/serialization.service';
import { AvisoService } from './services/avisos.service';
import { HttpClient } from '@angular/common/http';
import { global } from './services/global';
import { AvisoDataService } from './services/avisosData.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AvisosComponent, MapaComponent, CommonModule, MatButtonModule, MatCardModule, MatSidenavModule, MatIconButton, MatIconModule, MatToolbarModule, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [SerializationService, AvisoService, AvisoDataService]
})

export class AppComponent implements OnInit {
  title = 'api-canary';
  public screenWidth = window.innerWidth;
  public drawerOpened: boolean;
  public isMobile: boolean;
  public isContentMode: boolean;
  public url: string;
  public limit: number;
  public page: number;

  constructor(
    private _http: HttpClient,
    private _serializationService: SerializationService,
    private _avisosDataService: AvisoDataService
  ) {
    this.drawerOpened = true; // Variable para abrir o cerrar el mat-drawer
    this.isMobile = false; // Variable para ver si es tamaño de móvil o no
    this.isContentMode = false; // Variable que sirve para alternar el mat-drawer en dispositivos móviles

    this.url = global.url;

    this.checkIsMobile();
  }

  ngOnInit(): void {
    this._avisosDataService.getDataAvisos();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkIsMobile();
  }

  checkIsMobile() {
    this.isMobile = window.innerWidth <= 425;
    if (this.isMobile) {
      this.drawerOpened = !this.isContentMode;
    } else {
      this.drawerOpened = true;
    }
  }

  toggleDrawer() {
    if (this.isMobile) {
      this.isContentMode = !this.isContentMode;
      this.drawerOpened = !this.isContentMode;
    } else {
      this.drawerOpened = !this.drawerOpened;
    }
  }
}