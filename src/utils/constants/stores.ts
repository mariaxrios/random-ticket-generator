
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
    name: "Andalucía",
    bounds: {
      minLat: 36.0,
      maxLat: 38.7,
      minLng: -7.5,
      maxLng: -1.6
    },
    municipalities: [
      "Sevilla", "Málaga", "Córdoba", "Granada", "Jerez de la Frontera",
      "Almería", "Huelva", "Cádiz", "Jaén", "Marbella", "Dos Hermanas",
      "Algeciras", "Mijas", "Fuengirola", "Torremolinos"
    ],
    streets: [
      "Avenida de la Constitución", "Calle Sierpes", "Alameda Principal",
      "Calle Larios", "Paseo de los Tristes", "Calle San Fernando",
      "Avenida de Andalucía", "Plaza Nueva", "Calle Betis"
    ]
  },
  {
    name: "Aragón",
    bounds: {
      minLat: 40.0,
      maxLat: 42.9,
      minLng: -2.2,
      maxLng: 0.8
    },
    municipalities: [
      "Zaragoza", "Huesca", "Teruel", "Calatayud", "Utebo",
      "Monzón", "Barbastro", "Ejea de los Caballeros", "Alcañiz", "Fraga"
    ],
    streets: [
      "Paseo Independencia", "Calle Alfonso I", "Calle Don Jaime I",
      "Calle Coso", "Avenida de Goya", "Plaza del Pilar",
      "Paseo de la Mina", "Calle Mayor", "Gran Vía"
    ]
  },
  {
    name: "Asturias",
    bounds: {
      minLat: 42.9,
      maxLat: 43.7,
      minLng: -7.2,
      maxLng: -4.5
    },
    municipalities: [
      "Oviedo", "Gijón", "Avilés", "Siero", "Langreo",
      "Mieres", "San Martín del Rey Aurelio", "Castrillón", "Corvera", "Villaviciosa"
    ],
    streets: [
      "Calle Uría", "Paseo de Begoña", "Calle Corrida",
      "Avenida de la Costa", "Calle Mon", "Plaza del Carbayón",
      "Calle Pelayo", "Avenida de Galicia", "Plaza Mayor"
    ]
  },
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
      "Llucmajor", "Marratxí", "Inca", "Ciutadella", "Mahón",
      "Sant Josep", "Sant Antoni", "Alcúdia", "Pollença", "Sóller"
    ],
    streets: [
      "Passeig del Born", "Carrer de Sant Miquel", "Avinguda Jaume III",
      "Carrer dels Oms", "Passeig Marítim", "Carrer del Sindicat",
      "Carrer Major", "Via Roma", "Rambla dels Ducs"
    ]
  },
  {
    name: "Canarias",
    bounds: {
      minLat: 27.6,
      maxLat: 29.4,
      minLng: -18.2,
      maxLng: -13.4
    },
    municipalities: [
      "Las Palmas de Gran Canaria", "Santa Cruz de Tenerife", "La Laguna",
      "Telde", "Arona", "Adeje", "Puerto de la Cruz", "Arrecife",
      "San Bartolomé de Tirajana", "Santa Lucía de Tirajana"
    ],
    streets: [
      "Calle Triana", "Avenida Mesa y López", "Calle Mayor de Triana",
      "Avenida Marítima", "Calle Castillo", "Plaza España",
      "Calle León y Castillo", "Paseo de Las Canteras", "Avenida de Canarias"
    ]
  },
  {
    name: "Cantabria",
    bounds: {
      minLat: 42.7,
      maxLat: 43.5,
      minLng: -4.8,
      maxLng: -3.1
    },
    municipalities: [
      "Santander", "Torrelavega", "Castro-Urdiales", "Camargo", "Piélagos",
      "El Astillero", "Laredo", "Santoña", "Los Corrales de Buelna", "Santa Cruz de Bezana"
    ],
    streets: [
      "Paseo Pereda", "Calle Burgos", "Avenida Calvo Sotelo",
      "Calle Juan de Herrera", "Alameda de Oviedo", "Calle Vargas",
      "Paseo de Castelar", "Avenida de la Reina Victoria", "Calle Alta"
    ]
  },
  {
    name: "Castilla-La Mancha",
    bounds: {
      minLat: 38.0,
      maxLat: 41.3,
      minLng: -5.4,
      maxLng: -1.4
    },
    municipalities: [
      "Albacete", "Guadalajara", "Toledo", "Ciudad Real", "Cuenca",
      "Talavera de la Reina", "Puertollano", "Tomelloso", "Illescas", "Azuqueca de Henares"
    ],
    streets: [
      "Calle Ancha", "Paseo de la Rosa", "Calle Mayor",
      "Plaza Mayor", "Calle Real", "Calle Comercio",
      "Avenida de España", "Calle Toledo", "Plaza del Altozano"
    ]
  },
  {
    name: "Castilla y León",
    bounds: {
      minLat: 40.1,
      maxLat: 43.2,
      minLng: -7.0,
      maxLng: -1.8
    },
    municipalities: [
      "Valladolid", "Burgos", "Salamanca", "León", "Palencia",
      "Zamora", "Ávila", "Segovia", "Soria", "Ponferrada"
    ],
    streets: [
      "Calle Santiago", "Paseo Zorrilla", "Plaza Mayor",
      "Calle Real", "Rúa Mayor", "Calle San Pablo",
      "Avenida de Salamanca", "Plaza del Mercado", "Calle de los Bandos"
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
      "Reus", "Girona", "Sant Cugat del Vallès", "Cornellà", "Sant Boi", "Rubí"
    ],
    streets: [
      "Passeig de Gràcia", "La Rambla", "Avinguda Diagonal",
      "Carrer de Sants", "Via Laietana", "Rambla Catalunya",
      "Passeig de Sant Joan", "Carrer Gran de Gràcia", "Portal de l'Àngel"
    ]
  },
  {
    name: "Comunidad Valenciana",
    bounds: {
      minLat: 37.8,
      maxLat: 40.8,
      minLng: -1.5,
      maxLng: 0.7
    },
    municipalities: [
      "Valencia", "Alicante", "Elche", "Castellón de la Plana", "Torrevieja",
      "Orihuela", "Gandía", "Benidorm", "Paterna", "Sagunto"
    ],
    streets: [
      "Calle Colón", "Avenida del Puerto", "Plaza del Ayuntamiento",
      "Calle San Vicente", "Paseo Marítimo", "Calle La Paz",
      "Avenida Blasco Ibáñez", "Plaza de la Reina", "Calle Ruzafa"
    ]
  },
  {
    name: "Extremadura",
    bounds: {
      minLat: 37.9,
      maxLat: 40.5,
      minLng: -7.5,
      maxLng: -4.6
    },
    municipalities: [
      "Badajoz", "Cáceres", "Mérida", "Plasencia", "Don Benito",
      "Almendralejo", "Villanueva de la Serena", "Navalmoral de la Mata",
      "Zafra", "Montijo"
    ],
    streets: [
      "Calle San Juan", "Plaza Mayor", "Calle Pintores",
      "Avenida de España", "Calle San Pedro", "Plaza Alta",
      "Calle Santa Eulalia", "Ruta de la Plata", "Calle Menacho"
    ]
  },
  {
    name: "Galicia",
    bounds: {
      minLat: 41.8,
      maxLat: 43.8,
      minLng: -9.3,
      maxLng: -6.7
    },
    municipalities: [
      "Vigo", "A Coruña", "Ourense", "Lugo", "Santiago de Compostela",
      "Pontevedra", "Ferrol", "Narón", "Vilagarcía de Arousa", "Oleiros"
    ],
    streets: [
      "Rúa do Príncipe", "Cantón Grande", "Rúa Nova",
      "Praza do Obradoiro", "Rúa Real", "Avenida da Marina",
      "Rúa do Franco", "Praza de María Pita", "Rúa do Progreso"
    ]
  },
  {
    name: "La Rioja",
    bounds: {
      minLat: 41.9,
      maxLat: 42.6,
      minLng: -3.1,
      maxLng: -1.6
    },
    municipalities: [
      "Logroño", "Calahorra", "Arnedo", "Haro", "Alfaro",
      "Lardero", "Nájera", "Santo Domingo de la Calzada", "Villamediana de Iregua", "Pradejón"
    ],
    streets: [
      "Calle Portales", "Gran Vía", "Calle Laurel",
      "Avenida de la Paz", "Calle San Juan", "Calle Mayor",
      "Paseo del Espolón", "Calle Bretón de los Herreros", "Plaza del Mercado"
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
      "Parla", "Alcobendas", "San Sebastián de los Reyes", "Pozuelo",
      "Las Rozas", "Coslada", "Rivas-Vaciamadrid"
    ],
    streets: [
      "Gran Vía", "Calle de Alcalá", "Paseo de la Castellana",
      "Calle Mayor", "Calle de Serrano", "Calle de Goya",
      "Paseo del Prado", "Calle de Princesa", "Calle de Fuencarral"
    ]
  },
  {
    name: "Murcia",
    bounds: {
      minLat: 37.3,
      maxLat: 38.8,
      minLng: -2.3,
      maxLng: -0.6
    },
    municipalities: [
      "Murcia", "Cartagena", "Lorca", "Molina de Segura", "Alcantarilla",
      "Mazarrón", "San Javier", "Torre-Pacheco", "Águilas", "Totana"
    ],
    streets: [
      "Gran Vía", "Calle Trapería", "Avenida Alfonso X El Sabio",
      "Calle Platería", "Paseo Alfonso XIII", "Calle Mayor",
      "Avenida Floridablanca", "Plaza de Santo Domingo", "Calle Santa Teresa"
    ]
  },
  {
    name: "Navarra",
    bounds: {
      minLat: 41.9,
      maxLat: 43.3,
      minLng: -2.5,
      maxLng: -0.7
    },
    municipalities: [
      "Pamplona", "Tudela", "Barañáin", "Burlada", "Zizur Mayor",
      "Estella", "Tafalla", "Villava", "Ansoáin", "Berriozar"
    ],
    streets: [
      "Calle Estafeta", "Avenida Carlos III", "Calle Mayor",
      "Paseo Sarasate", "Calle San Nicolás", "Calle Mercaderes",
      "Avenida de Bayona", "Calle Zapatería", "Plaza del Castillo"
    ]
  },
  {
    name: "País Vasco",
    bounds: {
      minLat: 42.4,
      maxLat: 43.5,
      minLng: -3.5,
      maxLng: -1.7
    },
    municipalities: [
      "Bilbao", "Vitoria-Gasteiz", "San Sebastián", "Barakaldo", "Getxo",
      "Irún", "Portugalete", "Santurtzi", "Basauri", "Errenteria"
    ],
    streets: [
      "Gran Vía Don Diego López de Haro", "Calle Portal de Foronda",
      "Avenida de la Libertad", "Calle Postas", "Boulevard",
      "Calle Dato", "Alameda Recalde", "Paseo de la Concha", "Calle Ercilla"
    ]
  }
];

export const DEFAULT_REGION = REGIONS.find(r => r.name === "Madrid") || REGIONS[0];
