
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

interface RegionBounds {
  minLat: number;
  maxLat: number;
  minLng: number;
  maxLng: number;
}

interface Region {
  name: string;
  bounds: RegionBounds;
  municipalities: string[];
  streets: string[];
}

export const REGIONS: Region[] = [
  {
    name: "Islas Baleares",
    bounds: {
      minLat: 38.6,
      maxLat: 40.1,
      minLng: 1.2,
      maxLng: 4.4
    },
    municipalities: [
      "Palma", "Calvià", "Manacor", "Ibiza", "Santa Eulària des Riu",
      "Llucmajor", "Marratxí", "Inca", "Ciutadella", "Mahón"
    ],
    streets: [
      "Carrer Major", "Passeig Marítim", "Avinguda Jaume III",
      "Carrer dels Oms", "Carrer Sant Miquel", "Carrer del Sindicat",
      "Passeig del Born", "Carrer de la Mar", "Avinguda Gabriel Alomar"
    ]
  },
  {
    name: "Cataluña",
    bounds: {
      minLat: 40.5,
      maxLat: 42.9,
      minLng: 0.15,
      maxLng: 3.3
    },
    municipalities: [
      "Barcelona", "L'Hospitalet de Llobregat", "Badalona", "Terrassa",
      "Sabadell", "Lleida", "Tarragona", "Mataró", "Santa Coloma de Gramenet",
      "Reus"
    ],
    streets: [
      "Passeig de Gràcia", "La Rambla", "Carrer de Sants",
      "Avinguda Diagonal", "Carrer Gran de Gràcia", "Passeig de Sant Joan",
      "Via Laietana", "Carrer de Balmes", "Rambla de Catalunya"
    ]
  },
  {
    name: "Madrid",
    bounds: {
      minLat: 39.8,
      maxLat: 41.2,
      minLng: -4.6,
      maxLng: -3.0
    },
    municipalities: [
      "Madrid", "Móstoles", "Alcalá de Henares", "Fuenlabrada",
      "Leganés", "Getafe", "Alcorcón", "Torrejón de Ardoz",
      "Parla", "Alcobendas"
    ],
    streets: [
      "Gran Vía", "Calle Mayor", "Paseo de la Castellana",
      "Calle de Alcalá", "Calle de Serrano", "Paseo del Prado",
      "Calle de Goya", "Calle de Velázquez", "Calle de Princesa"
    ]
  },
  {
    name: "Andalucía",
    bounds: {
      minLat: 36.0,
      maxLat: 38.7,
      minLng: -7.5,
      maxLng: -1.6
    },
    municipalities: [
      "Sevilla", "Málaga", "Córdoba", "Granada", "Jerez de la Frontera",
      "Almería", "Huelva", "Cádiz", "Jaén", "Marbella"
    ],
    streets: [
      "Avenida de la Constitución", "Calle Sierpes", "Alameda de Hércules",
      "Paseo de Cristóbal Colón", "Calle San Fernando", "Avenida de la Palmera",
      "Calle Adriano", "Calle Betis", "Avenida de la Buhaira"
    ]
  }
];

export const DEFAULT_REGION = REGIONS.find(r => r.name === "Madrid") || REGIONS[0];
