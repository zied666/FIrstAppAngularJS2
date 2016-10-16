export class Hotel {
    details: Details;
    saison: string;
}
export class Details {
    id: number;
    libelle: string;
    check_in: string;
    check_out: string;
    email1: string;
    email2: string;
    tel1: string;
    tel2: string;
    longitude: string;
    latitude: string;
    adresse: string;
    description_courte: string;
    description_longue: string;
    trip_advisor: string;
    short_trip_advisor: string;
    ville: Object;
    categorie: Object;
    tags: Object;
}