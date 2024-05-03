import { Component, HostListener } from '@angular/core';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AvisosComponent, MapaComponent, CommonModule, MatButtonModule, MatCardModule, MatSidenavModule, MatIconButton, MatIconModule, MatToolbarModule, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [SerializationService]
})

export class AppComponent {
  title = 'api-canary';
  public screenWidth = window.innerWidth;
  public drawerOpened: boolean;
  public isMobile: boolean;
  public isContentMode: boolean;

  constructor(){
    this.drawerOpened = true; // Variable para abrir o cerrar el mat-drawer
    this.isMobile = false; // Variable para ver si es tamaño de móvil o no
    this.isContentMode = false; // Variable que sirve para alternar el mat-drawer en dispositivos móviles

    this.checkIsMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(){
    this.checkIsMobile();
  }

  checkIsMobile(){
    this.isMobile = window.innerWidth <= 425;
    if(this.isMobile){
      this.drawerOpened = !this.isContentMode;
    } else{
      this.drawerOpened = true;
    }
  }

  toggleDrawer(){
    if(this.isMobile){
      this.isContentMode = !this.isContentMode;
      this.drawerOpened = !this.isContentMode;
    } else {
      this.drawerOpened = !this.drawerOpened;
    }
  }
}
