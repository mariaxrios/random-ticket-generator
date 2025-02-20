
export const FICTIONAL_STORE_NAMES = [
  "EcoMarket Supermercados S.A.U.",
  "BioAliment Supermercados",
  "NaturalShop Market",
  "GreenGrocer S.A.U.",
  "VitaMarket Ecológico",
];

interface RealStore {
  name: string;
  nif: string;
  website: string;
}

export const REAL_STORE_DATA: RealStore[] = [
  {
    name: "Mercadona",
    nif: "A46103834",
    website: "www.mercadona.es"
  },
  {
    name: "Carrefour",
    nif: "A28425270",
    website: "www.carrefour.es"
  },
  {
    name: "Día",
    nif: "A28164754",
    website: "www.dia.es"
  },
  {
    name: "Lidl",
    nif: "A60195278",
    website: "www.lidl.es"
  },
  {
    name: "Alcampo",
    nif: "A28581882",
    website: "www.alcampo.es"
  },
  {
    name: "El Corte Inglés Supermercado",
    nif: "A28017895",
    website: "www.elcorteingles.es"
  },
  {
    name: "Aldi",
    nif: "B62409063",
    website: "www.aldi.es"
  },
  {
    name: "Consum",
    nif: "F46078986",
    website: "www.consum.es"
  },
  {
    name: "Eroski",
    nif: "F20033361",
    website: "www.eroski.es"
  },
  {
    name: "BonÀrea",
    nif: "F25008202",
    website: "www.bonarea.com"
  }
];

export const REAL_STORE_NAMES = REAL_STORE_DATA.map(store => store.name);

export const CITIES = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao"];
export const STREETS = ["Gran Vía", "Paseo de Gracia", "Calle Mayor", "Avenida Principal", "Plaza Central"];
