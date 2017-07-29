import { IPanelmaker } from './panelmaker';
import { ICity } from './city';

export interface IMemorialized {
    // formerly "name"
    memorializedId: number;
    memorializedFirst: string;
    memorializedLast: string;
    panelId: number;
    blockId: number;
    dob: string;
    dod: string;
    //panelmakers: IPanelmaker[]; 
    //should panelmakers be here? I decided no, as this is not a direct attribute of memorialized
    //instead can be linked through panelmakerRelationship->panelmaker
    //similar situation with cities
    // cities: ICity[];
}
