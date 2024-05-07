import { Component, OnInit } from '@angular/core';
import { Feature, Map, View } from 'ol';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import { MapaService } from '../services/mapa.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { fromLonLat } from 'ol/proj';
import Icon from 'ol/style/Icon';
import { Point } from 'ol/geom';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AvisoService } from '../services/avisos.service';
import { Aviso } from '../models/aviso';
import { AvisoDataService } from '../services/avisosData.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss',
  providers: [MapaService, AvisoService]
})

export class MapaComponent implements OnInit {
  public map: Map;
  public icon: Feature;
  public vectorSource: VectorSource;
  public long: number;
  public lat: number;
  public aviso: Aviso;

  constructor(
    private _mapaService: MapaService,
    public dialog: MatDialog,
    private _avisosDataService: AvisoDataService
  ){

  }

  ngOnInit() {
    this.initMap();
    
    this._avisosDataService.observableAvisos.subscribe((avisos: Aviso[]) => {
      for (let i = 0; i < avisos.length; i++) {
        this.aviso = avisos[i];
        this.drawPoints(this.aviso);
      }
    });
  }

  initMap() {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: 'map',
      view: new View({
        center: fromLonLat([-3.6483320, 40.5361528]),
        zoom: 14, maxZoom: 18
      }),
    });
    this.map.on('click', (event) => {
      this.map.forEachFeatureAtPixel(event.pixel, (feature) => {
        let data = feature.getProperties();
        this.openDialog(data['aviso']);
      });
    });
  }

  drawPoints(aviso: Aviso){
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat([aviso.long, aviso.lat])),
      name: 'Madrid',
      aviso: aviso
    });
    
    const iconStyle = new Style({
      image: new Icon({
        width: 20,
        height: 20,
        src: '../assets/img/icono.png'
      }),
    });
    
    iconFeature.setStyle(iconStyle);
    
    const vectorSource = new VectorSource({
      features: [iconFeature],
    });
    
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    this.map.addLayer(vectorLayer);
  }

  openDialog(aviso: Aviso){
    this._mapaService.showAviso(aviso);
  }
}