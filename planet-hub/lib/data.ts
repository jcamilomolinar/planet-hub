import PlanetPhoto from "@/public/planet.jpg";
import { AccommodationsData } from "@/lib/types";
import { faSwimmer, faTaxi, faSnowflake, faGlobe, faClock, faSnowplow, faBroom, faBullseye, faClipboardCheck, faComments, faMapMarkerAlt, faTag } from '@fortawesome/free-solid-svg-icons';

export const planets = [
  {
    "name": "Tatooine",
    "description": "Tatooine is a desolate, desert planet located in the Outer Rim Territories, far from the bustling center of the galaxy. With its iconic twin suns, Tatooine is a harsh and arid world where moisture farmers struggle to survive. Despite its remote location, Tatooine has been a crucial planet in galactic history, serving as the homeworld of both Anakin and Luke Skywalker. The planet is inhabited by various species, including the nomadic Tusken Raiders and the scavenging Jawas, who roam the deserts in search of valuable scrap."
  },
  {
    "name": "Coruscant",
    "description": "Coruscant is the vibrant and bustling heart of the galaxy, serving as the capital of the Galactic Republic and later the Galactic Empire. The entire planet is covered by a vast, multi-layered cityscape, reaching from the planet's surface up into the atmosphere. Skyscrapers, skybridges, and towering spires dominate the skyline, with countless levels housing billions of residents, businesses, and government facilities. As the political and cultural center of the galaxy, Coruscant is a hub of activity, where the fates of entire star systems are decided."
  },
  {
    "name": "Naboo",
    "description": "Naboo is a lush, green planet located in the Mid Rim, known for its breathtaking landscapes, including rolling plains, tranquil lakes, and dense forests. The planet is home to two primary species: the human Naboo, who live in elegant cities like Theed, and the amphibious Gungans, who reside in sprawling underwater cities beneath the planet's vast lakes. Naboo is renowned for its art, culture, and sophisticated architecture, and it has played a significant role in galactic events, being the homeworld of both Queen Padmé Amidala and Emperor Palpatine."
  },
  {
    "name": "Hoth",
    "description": "Hoth is a remote, frozen planet located in the Outer Rim, known for its inhospitable weather and icy terrain. The planet's surface is covered in thick layers of snow and ice, with temperatures plummeting far below freezing. Hoth's desolate landscape is punctuated by jagged mountains and massive glaciers. Despite its harsh environment, Hoth became a key location in the Galactic Civil War, serving as the site of Echo Base, a hidden Rebel Alliance outpost. The Battle of Hoth, fought between the Rebel forces and the Imperial army, remains one of the most significant engagements of the conflict."
  },
  {
    "name": "Dagobah",
    "description": "Dagobah is a mysterious, swamp-covered planet located in a remote corner of the galaxy. Its dense jungles, murky swamps, and thick fog create an eerie and foreboding atmosphere. Despite its uninviting appearance, Dagobah is a place of great significance in the Force. The planet's strong connection to the Force made it an ideal hiding place for Jedi Master Yoda during his self-imposed exile after the fall of the Jedi Order. Yoda's hut, hidden deep within the swamp, served as a sanctuary where he trained Luke Skywalker in the ways of the Force."
  },
  {
    "name": "Mustafar",
    "description": "Mustafar is a volcanic planet located in the Outer Rim, characterized by its rivers of molten lava, fiery eruptions, and treacherous terrain. The planet's surface is a hellish landscape of flowing lava and jagged rock formations, making it one of the most dangerous worlds in the galaxy. Mustafar gained notoriety as the site of the fateful duel between Anakin Skywalker and Obi-Wan Kenobi, where Anakin was left severely injured and transformed into Darth Vader. The planet later became the location of Vader's personal fortress, a symbol of his power and connection to the dark side."
  },
  {
    "name": "Endor",
    "description": "Endor, often referred to as the Forest Moon of Endor, is a lush, forested world located in the Outer Rim. The moon's surface is covered in towering trees, dense undergrowth, and vast, untouched wilderness. Endor is most famous for being the home of the Ewoks, a primitive but resourceful species of small, bear-like creatures who inhabit the forest villages. Despite its remote location, Endor became a pivotal site in the Galactic Civil War when the Rebel Alliance launched an assault on the Imperial shield generator protecting the second Death Star, leading to the Empire's eventual defeat."
  },
  {
    "name": "Kamino",
    "description": "Kamino is an oceanic planet situated in the Wild Space region, known for its endless storms and vast oceans that cover nearly the entire planet. The planet's inhabitants, the Kaminoans, are skilled cloners and genetic engineers, living in towering cities that rise above the ocean's surface. Kamino is most famous for being the birthplace of the Grand Army of the Republic, as it was here that the Clone Army was created using the genetic template of the bounty hunter Jango Fett. The planet's isolation and constant storms make it a difficult and secretive place, adding to its enigmatic nature."
  }
] as const

export const tours = [
  {
    "label": "Galactic Adventure",
    "value": "galactic_adventure"
  },
  {
    "label": "Starship Discovery",
    "value": "starship_discovery"
  },
  {
    "label": "Mystical Planets Tour",
    "value": "mystical_planets_tour"
  },
  {
    "label": "Outer Rim Expedition",
    "value": "outer_rim_expedition"
  },
  {
    "label": "Jedi Training Experience",
    "value": "jedi_training_experience"
  },
  {
    "label": "Sith Secrets Journey",
    "value": "sith_secrets_journey"
  },
  {
    "label": "HoloNet History Walk",
    "value": "holonet_history_walk"
  },
  {
    "label": "Ancient Ruins Exploration",
    "value": "ancient_ruins_exploration"
  },
  {
    "label": "None",
    "value": ""
  }
] as const

export const wheaters = [
  {
    "label": "Sunny Paradise",
    "value": "sunny_paradise"
  },
  {
    "label": "Icy Tundra",
    "value": "icy_tundra"
  },
  {
    "label": "Misty Highlands",
    "value": "misty_highlands"
  },
  {
    "label": "Tropical Stormfront",
    "value": "tropical_stormfront"
  },
  {
    "label": "Desert Heatwave",
    "value": "desert_heatwave"
  },
  {
    "label": "Rainforest Monsoon",
    "value": "rainforest_monsoon"
  },
  {
    "label": "Aurora Borealis",
    "value": "aurora_borealis"
  },
  {
    "label": "Volcanic Ashfall",
    "value": "volcanic_ashfall"
  },
  {
    "label": "None",
    "value": ""
  }
] as const

export const activityTypes = [
  {
    "label": "Skydiving Thrill",
    "value": "skydiving_thrill"
  },
  {
    "label": "Mountain Trekking",
    "value": "mountain_trekking"
  },
  {
    "label": "Deep Sea Diving",
    "value": "deep_sea_diving"
  },
  {
    "label": "Cave Exploration",
    "value": "cave_exploration"
  },
  {
    "label": "Wildlife Safari",
    "value": "wildlife_safari"
  },
  {
    "label": "Cultural Heritage Tour",
    "value": "cultural_heritage_tour"
  },
  {
    "label": "Gourmet Cooking Class",
    "value": "gourmet_cooking_class"
  },
  {
    "label": "Yoga Retreat",
    "value": "yoga_retreat"
  },
  {
    "label": "None",
    "value": ""
  }
] as const

export const puntuations = [
  {
    "label": "⭐",
    "value": "1"
  },
  {
    "label": "⭐⭐",
    "value": "2"
  },
  {
    "label": "⭐⭐⭐",
    "value": "3"
  },
  {
    "label": "⭐⭐⭐⭐",
    "value": "4"
  },
  {
    "label": "None",
    "value": ""
  }
] as const

const setDateToMidnight = (date: string) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

export const flights_data = [
  {
    "planet": "Tatooine",
    "tour": "outer_rim_expedition",
    "weather": "aurora_borealis",
    "activityType": "yoga_retreat",
    "puntuation": "2.53",
    "date": setDateToMidnight("2024-09-01"),
    "time": "14:30",
    "price": 14500,
    "timeTravel": 120
  },
  {
    "planet": "Coruscant",
    "tour": "sith_secrets_journey",
    "weather": "icy_tundra",
    "activityType": "skydiving_thrill",
    "puntuation": "1.44",
    "date": setDateToMidnight("2024-09-02"),
    "time": "09:15",
    "price": 17500,
    "timeTravel": 95
  },
  {
    "planet": "Naboo",
    "tour": "outer_rim_expedition",
    "weather": "desert_heatwave",
    "activityType": "yoga_retreat",
    "puntuation": "1.95",
    "date": setDateToMidnight("2024-09-03"),
    "time": "16:45",
    "price": 12300,
    "timeTravel": 150
  },
  {
    "planet": "Hoth",
    "tour": "mystical_planets_tour",
    "weather": "aurora_borealis",
    "activityType": "skydiving_thrill",
    "puntuation": "2.14",
    "date": setDateToMidnight("2024-09-04"),
    "time": "11:00",
    "price": 18900,
    "timeTravel": 80
  },
  {
    "planet": "Dagobah",
    "tour": "galactic_adventure",
    "weather": "tropical_stormfront",
    "activityType": "yoga_retreat",
    "puntuation": "4.42",
    "date": setDateToMidnight("2024-09-05"),
    "time": "18:30",
    "price": 15800,
    "timeTravel": 135
  },
  {
    "planet": "Mustafar",
    "tour": "mystical_planets_tour",
    "weather": "rainforest_monsoon",
    "activityType": "deep_sea_diving",
    "puntuation": "1.15",
    "date": setDateToMidnight("2024-09-06"),
    "time": "07:45",
    "price": 13700,
    "timeTravel": 110
  },
  {
    "planet": "Endor",
    "tour": "jedi_training_experience",
    "weather": "aurora_borealis",
    "activityType": "cultural_heritage_tour",
    "puntuation": "2.42",
    "date": setDateToMidnight("2024-09-07"),
    "time": "12:00",
    "price": 16500,
    "timeTravel": 140
  },
  {
    "planet": "Kamino",
    "tour": "jedi_training_experience",
    "weather": "tropical_stormfront",
    "activityType": "cultural_heritage_tour",
    "puntuation": "2.44",
    "date": setDateToMidnight("2024-09-08"),
    "time": "15:30",
    "price": 15500,
    "timeTravel": 125
  },
  {
    "planet": "Tatooine",
    "tour": "outer_rim_expedition",
    "weather": "aurora_borealis",
    "activityType": "yoga_retreat",
    "puntuation": "2.53",
    "date": setDateToMidnight("2024-09-15"),
    "time": "10:00",
    "price": 14800,
    "timeTravel": 120
  },
  {
    "planet": "Coruscant",
    "tour": "sith_secrets_journey",
    "weather": "icy_tundra",
    "activityType": "skydiving_thrill",
    "puntuation": "1.44",
    "date": setDateToMidnight("2024-09-16"),
    "time": "13:45",
    "price": 18200,
    "timeTravel": 95
  },
  {
    "planet": "Naboo",
    "tour": "outer_rim_expedition",
    "weather": "desert_heatwave",
    "activityType": "yoga_retreat",
    "puntuation": "1.95",
    "date": setDateToMidnight("2024-09-17"),
    "time": "08:30",
    "price": 12900,
    "timeTravel": 150
  },
  {
    "planet": "Hoth",
    "tour": "mystical_planets_tour",
    "weather": "aurora_borealis",
    "activityType": "skydiving_thrill",
    "puntuation": "2.14",
    "date": setDateToMidnight("2024-09-18"),
    "time": "17:15",
    "price": 19400,
    "timeTravel": 80
  },
  {
    "planet": "Dagobah",
    "tour": "galactic_adventure",
    "weather": "tropical_stormfront",
    "activityType": "yoga_retreat",
    "puntuation": "4.42",
    "date": setDateToMidnight("2024-09-19"),
    "time": "14:00",
    "price": 16200,
    "timeTravel": 135
  },
  {
    "planet": "Mustafar",
    "tour": "mystical_planets_tour",
    "weather": "rainforest_monsoon",
    "activityType": "deep_sea_diving",
    "puntuation": "1.15",
    "date": setDateToMidnight("2024-09-20"),
    "time": "06:30",
    "price": 14100,
    "timeTravel": 110
  },
  {
    "planet": "Endor",
    "tour": "jedi_training_experience",
    "weather": "aurora_borealis",
    "activityType": "cultural_heritage_tour",
    "puntuation": "2.42",
    "date": setDateToMidnight("2024-09-21"),
    "time": "09:00",
    "price": 17000,
    "timeTravel": 140
  },
  {
    "planet": "Kamino",
    "tour": "jedi_training_experience",
    "weather": "tropical_stormfront",
    "activityType": "cultural_heritage_tour",
    "puntuation": "2.44",
    "date": setDateToMidnight("2024-09-22"),
    "time": "12:30",
    "price": 15800,
    "timeTravel": 125
  }
] as const;

// // Accomodations

// export const accommodations_data = [
//   {
//     id: 1,
//     accommodationName: "Accomodation 3",
//     accommodationStars: 4.5,
//     accommodationPhotos: PlanetPhotoPlanetPhotoPlanetPhoto,
//     accommodationPrice: "3.000.000"
//   },
//   {
//     id: 2,
//     accommodationName: "Accomodation2",
//     accommodationStars: 4.1,
//     accommodationPhotos: PlanetPhotoPlanetPhoto,
//     accommodationPrice: "3.300.000"
//   },
//   {
//     id: 3,
//     accommodationName: "Accomodation3",
//     accommodationStars: 4.1,
//     accommodationPhotos: PlanetPhoto,
//     accommodationPrice: "3.540.000"
//   },
//   {
//     id: 4,
//     accommodationName: "Accomodation4",
//     accommodationStars: 5.0,
//     accommodationPhotos: PlanetPhotoPlanetPhotoPlanetPhoto,
//     accommodationPrice: "1.000.000"
//   },
//   {
//     id: 5,
//     accommodationName: "Accomodation5",
//     accommodationStars: 4.7,
//     accommodationPhotos: PlanetPhotoPlanetPhoto,
//     accommodationPrice: "3.000.000"
//   },
//   {
//     id: 6,
//     accommodationName: "Accomodation6",
//     accommodationStars: 4.9,
//     accommodationPhotos: PlanetPhotoPlanetPhoto,
//     accommodationPrice: "2.100.000"
//   }
// ] as const;



export const accommodations: AccommodationsData[] = [
  {
    id: 1,
    name: "Cabaña Marte Baratica..",
    nameExtend: "Cabaña Marte, Monte Olimpo...",
    stars: 4.2,
    numberReviews: 19,
    descripcion: `Ubicado en la imponente ladera del monte Olimpo, el Hotel Estelar Olympus redefine el concepto de lujo y aventura en el planeta rojo. Este exclusivo destino ofrece una experiencia inigualable para los viajeros espaciales más audaces. Características Destacadas:`,
    imageUrls: [
      '/planet.jpg',
      '/planet.jpg',
      '/planet.jpg',
      '/planet.jpg',
      '/planet.jpg',
    ],
    services: [
      {
        id: 1,
        title: "Outdoor swimming pool",
        description: "",
        imageUrl: "/img1.png",
        icon: faSwimmer,
      },
      {
        id: 2,
        title: "Airport transfer.",
        description: "",
        imageUrl: "/img2.png",
        icon: faTaxi
      },
      {
        id: 3,
        title: "Air conditioning",
        description: "",
        imageUrl: "/img3.png",
        icon: faSnowflake
      },
      {
        id: 4,
        title: "Interplanetary Gastronomy",
        description: "",
        imageUrl: "/img3.png",
        icon: faGlobe
      },
      {
        id: 5,
        title: "24.6 hour reception",
        description: "",
        imageUrl: "/img3.png",
        icon: faClock
      }
    ],
    valuation: {
      averageRating: 4.2,
      totalRatings: 8,
      categories: [
        { name: 'Cleanliness', rating: 4.2, icon: faBroom },
        { name: 'Accuracy', rating: 4.2, icon: faBullseye },
        { name: 'Registration', rating: 4.2, icon: faClipboardCheck },
        { name: 'Communication', rating: 4.2, icon: faComments },
        { name: 'Location', rating: 4.2, icon: faMapMarkerAlt },
        { name: 'Price', rating: 4.2, icon: faTag },
      ]
    },
    host: {
      name: "Daniel Silva",
      joinedYear: 2021,
      email: "correo@correo.com",
      avatar: "/planet.jpg"
    }
  },
  {
    id: 2,
    name: "Cabaña Bloom",
    nameExtend: "Cabaña Bloom, Neptuno",
    stars: 4.9,
    numberReviews: 25,
    descripcion: `Ubicada en la helada superficie de Neptuno, la Cabaña Bloom ofrece una experiencia acogedora y mágica en un entorno galáctico inigualable. Dirigida por la encantadora Paula, esta cabaña destaca por su hospitalidad y confort en medio del frío espacial. Entre sus características destacadas:
    - Entorno Ártico: Disfruta de la belleza de las auroras neptunianas y las noches estrelladas desde la comodidad de nuestras habitaciones calefaccionadas.
    Michis Galácticos: Relájate en la compañía de nuestros adorables michis galácticos, quienes añaden un toque de calidez y alegría a tu estancia.
    Spa Invernal: Sumérgete en nuestro spa que utiliza agua helada para ofrecerte tratamientos rejuvenecedores en un ambiente cálido y acogedor.
    Cocina Estelar: Saborea platos únicos preparados con ingredientes exóticos que combinan sabores terrícolas con un toque galáctico.
    Excursiones en Nieve: Explora la superficie neptuniana con nuestras excursiones guiadas en trineos impulsados por energía cósmica, ideales para experimentar la nieve galáctica.
    Observación de Auroras: Admira las impresionantes auroras de Neptuno desde nuestra terraza de observación equipada con telescopios de última generación.
    La Cabaña Bloom no solo te ofrece un refugio en el frío espacial, sino una experiencia galáctica completa llena de calidez y asombro. Ven a disfrutar de un descanso en el frío interplanetario con la mejor compañía en el sistema solar.`
    ,
    imageUrls: [
      '/planet.jpg',
      '/planet.jpg',
      '/planet.jpg',
      '/planet.jpg',
      '/planet.jpg'
    ],
    services: [
      {
        id: 1,
        title: "Heated Accommodation",
        description: "Rooms with advanced heating systems to maintain comfort in the Neptunian cold.",
        imageUrl: "/img1.png",
        icon: faSnowflake
      },
      {
        id: 2,
        title: "Company of Galactic Kittens",
        description: "Enjoy the company of galactic kitties that will bring you warmth and joy during your stay.",
        imageUrl: "/img1.png",
        icon: faSnowflake
      },
      {
        id: 3,
        title: "Winter Spa",
        description: "Rejuvenating treatments in a spa with ice water in a warm and relaxing environment.",
        imageUrl: "/img1.png",
        icon: faSnowflake
      },
      {
        id: 4,
        title: "Star Cuisine",
        description: "Exquisite dishes that combine earthly and galactic ingredients prepared by our chef.",
        imageUrl: "/img1.png",
        icon: faSnowflake
      },
      {
        id: 5,
        title: "Snow Tours",
        description: "Guide and sleds to explore the Neptunian surface and experience the galactic snow.",
        imageUrl: "/img1.png",
        icon: faSnowplow
      }
    ],
    valuation: {
      averageRating: 4.9,
      totalRatings: 25,
      categories: [
        { name: 'Cleanliness', rating: 4.9, icon: faBroom },
        { name: 'Accuracy', rating: 4.9, icon: faBullseye },
        { name: 'Check-in', rating: 4.9, icon: faClipboardCheck },
        { name: 'Communication ', rating: 4.9, icon: faComments },
        { name: 'Location', rating: 4.9, icon: faMapMarkerAlt },
        { name: 'Price', rating: 4.9, icon: faTag },
      ]
    },
    host: {
      name: "Paula Bloom",
      joinedYear: 2020,
      email: "paula@bloom.com",
      avatar: "/planet.jpg"
    }
  }
] as const;


export const accommodation_search = [
  {
    "id": "acc001",
    "planet": "Marte",
    "availableFrom": setDateToMidnight("2024-09-20"),
    "availableTo": setDateToMidnight("2024-10-20"),
    "capacity": 2,
    "pricePerNight": 500,
  },
  {
    "id": "acc002",
    "planet": "Luna",
    "availableFrom": setDateToMidnight("2024-10-22"),
    "availableTo": setDateToMidnight("2024-11-22"),
    "capacity": 4,
    "pricePerNight": 750,
  },
  {
    "id": "acc003",
    "planet": "Venus",
    "availableFrom": setDateToMidnight("2024-06-26"),
    "availableTo": setDateToMidnight("2024-07-26"),
    "capacity": 3,
    "pricePerNight": 1000,
  }
] as const;


// Accomodations

export const accommodations_data = [
  {
    "id": 1,
    "accommodationName": "Accomodation 3",
    "accommodationStars": 4.5,
    "accommodationPhotos": [PlanetPhoto, PlanetPhoto, PlanetPhoto],
    "accommodationPrice": "3.000.000",
    "planet": "Marte",
    "availableFrom": setDateToMidnight("2024-09-20"),
    "availableTo": setDateToMidnight("2024-09-23"),
    "capacity": 2,
    "pricePerNight": 500
  },
  {
    "id": 2,
    "accommodationName": "Accomodation 2",
    "accommodationStars": 4.1,
    "accommodationPhotos": [PlanetPhoto, PlanetPhoto],
    "accommodationPrice": "3.300.000",
    "planet": "Tierra",
    "availableFrom": setDateToMidnight("2024-10-01"),
    "availableTo": setDateToMidnight("2024-11-01"),
    "capacity": 4,
    "pricePerNight": 450
  },
  {
    "id": 3,
    "accommodationName": "Accomodation 3",
    "accommodationStars": 4.1,
    "accommodationPhotos": [PlanetPhoto],
    "accommodationPrice": "3.540.000",
    "planet": "Jupiter",
    "availableFrom": setDateToMidnight("2024-09-15"),
    "availableTo": setDateToMidnight("2024-10-15"),
    "capacity": 3,
    "pricePerNight": 550
  },
  {
    "id": 4,
    "accommodationName": "Accomodation 4",
    "accommodationStars": 5.0,
    "accommodationPhotos": [PlanetPhoto, PlanetPhoto, PlanetPhoto],
    "accommodationPrice": "1.000.000",
    "planet": "Venus",
    "availableFrom": setDateToMidnight("2024-08-01"),
    "availableTo": setDateToMidnight("2024-08-31"),
    "capacity": 2,
    "pricePerNight": 200
  },
  {
    "id": 5,
    "accommodationName": "Accomodation 5",
    "accommodationStars": 4.7,
    "accommodationPhotos": [PlanetPhoto, PlanetPhoto],
    "accommodationPrice": "3.000.000",
    "planet": "Saturno",
    "availableFrom": setDateToMidnight("2024-11-01"),
    "availableTo": setDateToMidnight("2024-12-01"),
    "capacity": 4,
    "pricePerNight": 600
  },
  {
    "id": 6,
    "accommodationName": "Accomodation 6",
    "accommodationStars": 4.9,
    "accommodationPhotos": [PlanetPhoto, PlanetPhoto],
    "accommodationPrice": "2.100.000",
    "planet": "Urano",
    "availableFrom": setDateToMidnight("2024-09-10"),
    "availableTo": setDateToMidnight("2024-10-10"),
    "capacity": 3,
    "pricePerNight": 400
  },
  {
    "id": 7,
    "accommodationName": "Accomodation 7",
    "accommodationStars": 3.8,
    "accommodationPhotos": [PlanetPhoto],
    "accommodationPrice": "2.500.000",
    "planet": "Neptuno",
    "availableFrom": setDateToMidnight("2024-10-05"),
    "availableTo": setDateToMidnight("2024-11-05"),
    "capacity": 2,
    "pricePerNight": 300
  },
  {
    "id": 8,
    "accommodationName": "Accomodation 8",
    "accommodationStars": 4.3,
    "accommodationPhotos": [PlanetPhoto, PlanetPhoto],
    "accommodationPrice": "2.800.000",
    "planet": "Marte",
    "availableFrom": setDateToMidnight("2024-10-20"),
    "availableTo": setDateToMidnight("2024-10-25"),
    "capacity": 5,
    "pricePerNight": 350
  }
] as const;

