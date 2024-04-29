import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { global } from './services/global';
import { AvisosComponent } from './avisos/avisos.component';
import { MapaComponent } from './mapa/mapa.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AvisosComponent, MapaComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'api-canary';
  public url: string;
  public visible: boolean;
  public screenWidth = window.innerWidth;

  constructor(){
    this.url = global.url;
    this.visible = true;
  }

  showListado(){
    this.visible = !this.visible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
  }
}
