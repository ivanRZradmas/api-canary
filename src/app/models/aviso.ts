export class Aviso{
    public long: number;
    public lat: number;
    public service_name: string;
    public service_id: string;
    public address: string;
    public description: string;
    public requested_datetime: Date;

    constructor(
        address: string,
        address_string: string,
        comments_count: number,
        complaints_count: number,
        current_node_estimated_final_datetime: Date,
        current_node_estimated_start_datetime: Date,
        description: string,
        estimated_final_datetime: Date,
        estimated_start_datetime: Date,
        evaluation: number,
        jurisdiction_element: any,
        jurisdiction_id: string,
        lat: number,
        long: number,
        reiterations_count: number,
        requested_datetime: Date,
        service_icon: string,
        service_id: string,
        service_name: string,
        service_request_id: string,
        status_node: any,
        status_node_type: string,
        tags: any,
        token: string,
        typology: any,
        worknotes_count: number
    ){
      this.long = long;
      this.lat = lat;
      this.service_name = service_name;
      this.service_id = service_id;
      this.address = address;
      this.description = description;
      this.requested_datetime = requested_datetime;
    }
}