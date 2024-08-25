import React from 'react'
import Accomodations from '@/components/space-component/Accomodations';
import { AccomodationsData } from '@/components/space-component/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmer, faTaxi, faSnowflake, faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';
import { FaStar, FaSprayCan, FaCheckCircle, FaKey, FaComments, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

const data: AccomodationsData = {
  id: 1,
  name: "Cabaña Marte Baratica..",
  nameExtend: "Cabaña Marte, Monte Olimpo...",
  stars: 4.2,
  numberReviews: 19,
  descripcion: `Ubicado en la imponente ladera del monte Olimpo, el Hotel Estelar Olympus redefine el concepto de lujo y aventura en el planeta rojo. Este exclusivo destino ofrece una experiencia inigualable para los viajeros espaciales más audaces.
    Características Destacadas:
    - Vistas Panorámicas: Disfruta de vistas ininterrumpidas del monte Olimpo y el vasto paisaje marciano desde nuestras habitaciones con paredes de vidrio inteligente que se adaptan a las condiciones atmosféricas para ofrecerte la mejor panorámica.
    Cúpulas de Gravedad Artificial: Nuestras lujosas suites están equipadas con cúpulas de gravedad artificial que simulan la gravedad terrestre, brindando una experiencia de confort y movilidad sin igual en Marte.
    Restaurante Intergaláctico: Saborea una exquisita gastronomía marciana y terrícola en nuestro restaurante de alta cocina, donde los chefs fusionan ingredientes exóticos con técnicas culinarias avanzadas.Prueba platos creados a partir de cultivos hidropónicos locales y recetas interplanetarias.
    Oasis de Relajación: Relájate en nuestro spa con vistas a la superficie de Marte, que ofrece tratamientos rejuvenecedores utilizando tecnologías avanzadas, desde masajes con vibración de microgravedad hasta envolturas nutritivas hechas con minerales marcianos.
    Actividades de Aventura: Atrévete a explorar el terreno marciano con nuestras excursiones guiadas en vehículos de tracción todo terreno o realiza caminatas en el cráter del monte Olimpo con equipamiento de última generación.
    Zona de Realidad Virtual Inmersiva: Sumérgete en experiencias virtuales que recrean paisajes y eventos históricos tanto de Marte como de la Tierra, proporcionando una inmersión completa en la historia y cultura interplanetaria.
    Observatorio Astronómico: Admira las estrellas y otros planetas desde nuestro observatorio de última tecnología, equipado con telescopios avanzados y un sistema de proyección holográfica para observar el cosmos en todo su esplendor.
    El Hotel Estelar Olympus no solo ofrece un lugar para hospedarse, sino una experiencia marciana completa que combina el lujo con la exploración y la innovación.Ven a ser parte de la próxima frontera en el turismo espacial y descubre lo que significa realmente vivir entre las estrellas.`
  ,
  imageUrls: [
    '/img1.png',
    '/img2.png',
    '/img3.png',
    '/planet.jpg',
    '/planet.jpg'
  ],
  services: [
    {
      id: 1,
      title: "Piscina aire libre",
      description: "",
      imageUrl: "/img1.png",
      icon: faSwimmer
    },
    {
      id: 2,
      title: "Traslado aeropuerto.",
      description: "",
      imageUrl: "/img2.png",
      icon: faTaxi
    },
    {
      id: 3,
      title: "Aire acondicionado",
      description: "",
      imageUrl: "/img3.png",
      icon: faSnowflake
    },
    {
      id: 4,
      title: "Gastronomía Interplanetaria",
      description: "",
      imageUrl: "/img3.png",
      icon: faGlobe
    },
    {
      id: 5,
      title: "Recepción 24,6 horas",
      description: "",
      imageUrl: "/img3.png",
      icon: faClock
    }
  ],
  valuation: {
    averageRating: 4.9,
    totalRatings: 8,
    categories: [
      { name: 'Limpieza', rating: 4.8, icon: <FaSprayCan className="text-blue-500 text-4xl" /> },
      { name: 'Exactitud', rating: 4.8, icon: <FaCheckCircle className="text-green-500 text-4xl" /> },
      { name: 'Check-in', rating: 4.8, icon: <FaKey className="text-yellow-500 text-4xl" /> },
      { name: 'Comunicación', rating: 4.8, icon: <FaComments className="text-purple-500 text-4xl" /> },
      { name: 'Ubicación', rating: 4.8, icon: <FaMapMarkerAlt className="text-red-500 text-4xl" /> },
      { name: 'Precio', rating: 4.8, icon: <FaTag className="text-indigo-500 text-4xl" /> },
    ]
  }
};

function Space() {
  return (
    <div>
      <Accomodations data={data} />
    </div>
  )
}

export default Space