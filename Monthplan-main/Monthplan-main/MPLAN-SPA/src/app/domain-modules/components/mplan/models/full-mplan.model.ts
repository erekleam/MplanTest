import { Dictionary } from "src/app/shared/models/dictionary.model";

export interface MplanFull{
    Header: MplanHeader;
    Details: MplanMestranDetails[];
    
}

export interface MplanHeader{
    StatementType: string;
    FileType: string;
    dateFrom: string;
    LoadType: string;


    senderCountry: string;
    senderCountryText: string;
    senderStation:string;
    senderStationText: string;
    ReceiverCountry: string;
    ReceiverCountryText: string;
    ReceiverStation: string;
    ReceiverStationText: string;

    gzavnilisSaxeoba: string;
    tvirtiGNG: string;
    tvirtiGNGText: string;
    tvirtiWona: string;
    Nishani: string;
    VagonisSaxeoba: string;
    VagonisRaodenoba: string;
    konteinerisZoma: string;
    konteinerisRaodenoba: string;
    LoadSender: string;
    LoadSenderText: string;
    LoadReciever: string;
    LoadRecieverText: string;
    PortLoadReciever: string;
    PortLoadRecieverText: string;
    Port: string;
    PortText: string;
    FeedbackNote: string;
}



export interface MplanMestranDetails{
    transportingAdministrationCode: string;
    transportingAdministration: string;
    ReceiverdockingCode: string;
    ReceiverdockingSpot: string;
    Code: string;
    Forwarder: string;
}



export class fileTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}


export class Data {
    pair: string;
    code: string;
    name: string;
    
}

export class transportingTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}

export class shipmentTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}
export class signTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}
export class vagonTypesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}
export class containerSizesList{
    data: Data [];
    itemCount: number;
    pageIndex: number;
    pageSize: number;
    totalPages: number;
}

export interface IMplanRouteStation{
    modify: boolean;
    id: number;
    headerid: number;
    ReceiverCountry: number;
    ReceiverStation: number;
    station: number;
    routeStation: number;
}