import { Injectable } from "@angular/core";
import { Aviso, AvisoApi } from "../models/aviso";

@Injectable()

export class SerializationService {
    constructor() {}

    deserialize = (avisoApi: AvisoApi): Aviso => {
        var objeto: Aviso = new Aviso();
        objeto.long = avisoApi.long;
        objeto.lat = avisoApi.lat;
        objeto.service_name = avisoApi.service_name;
        objeto.service_id = avisoApi.service_id;
        objeto.address = avisoApi.address;
        objeto.description = avisoApi.description;
        objeto.requested_datetime = avisoApi.requested_datetime;

        return objeto;
    }

    deserializeList = (avisos: AvisoApi[]): Aviso[] => {
        return avisos.map(this.deserialize);
    }
}