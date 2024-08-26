import React from 'react'
import Accomodations from '@/components/space-component/Accomodations';
import { AccomodationsData } from '@/components/space-component/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmer, faTaxi, faSnowflake, faGlobe, faClock, faSnowplow } from '@fortawesome/free-solid-svg-icons';
import { FaStar, FaSprayCan, FaCheckCircle, FaKey, FaComments, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

const data: AccomodationsData[] = [
    {
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
            '/planet.jpg',
            '/planet.jpg',
            '/planet.jpg',
            '/planet.jpg',
            '/planet.jpg',
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
            averageRating: 4.2,
            totalRatings: 8,
            categories: [
                { name: 'Limpieza', rating: 4.2, icon: <FaSprayCan className="text-blue-500 text-4xl" /> },
                { name: 'Exactitud', rating: 4.2, icon: <FaCheckCircle className="text-green-500 text-4xl" /> },
                { name: 'Check-in', rating: 4.2, icon: <FaKey className="text-yellow-500 text-4xl" /> },
                { name: 'Comunicación', rating: 4.2, icon: <FaComments className="text-purple-500 text-4xl" /> },
                { name: 'Ubicación', rating: 4.2, icon: <FaMapMarkerAlt className="text-red-500 text-4xl" /> },
                { name: 'Precio', rating: 4.2, icon: <FaTag className="text-indigo-500 text-4xl" /> },
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
                title: "Alojamiento Calefaccionado",
                description: "Habitaciones con sistemas avanzados de calefacción para mantener el confort en el frío neptuniano.",
                imageUrl: "/img1.png",
                icon: faSnowflake
            },
            {
                id: 2,
                title: "Compañía de Michis Galácticos",
                description: "Disfruta de la compañía de michis galácticos que te brindarán calidez y alegría durante tu estancia.",
                imageUrl: "/img1.png",
                icon: faSnowflake // Asumiendo que tienes un icono de gato
            },
            {
                id: 3,
                title: "Spa Invernal",
                description: "Tratamientos rejuvenecedores en un spa con agua helada en un ambiente cálido y relajante.",
                imageUrl: "/img1.png",
                icon: faSnowflake // O cualquier otro icono que represente el spa
            },
            {
                id: 4,
                title: "Cocina Estelar",
                description: "Platos exquisitos que combinan ingredientes terrícolas y galácticos preparados por nuestro chef.",
                imageUrl: "/img1.png",
                icon: faSnowflake // O cualquier otro icono que represente la comida
            },
            {
                id: 5,
                title: "Excursiones en Nieve",
                description: "Guía y trineos para explorar la superficie neptuniana y experimentar la nieve galáctica.",
                imageUrl: "/img1.png",
                icon: faSnowplow // O cualquier otro icono que represente las excursiones
            }
        ],
        valuation: {
            averageRating: 4.9,
            totalRatings: 25,
            categories: [
                { name: 'Limpieza', rating: 4.9, icon: <FaSprayCan className="text-blue-500 text-4xl" /> },
                { name: 'Exactitud', rating: 4.9, icon: <FaCheckCircle className="text-green-500 text-4xl" /> },
                { name: 'Check-in', rating: 4.9, icon: <FaKey className="text-yellow-500 text-4xl" /> },
                { name: 'Comunicación', rating: 4.9, icon: <FaComments className="text-purple-500 text-4xl" /> },
                { name: 'Ubicación', rating: 4.9, icon: <FaMapMarkerAlt className="text-red-500 text-4xl" /> },
                { name: 'Precio', rating: 4.9, icon: <FaTag className="text-indigo-500 text-4xl" /> },
            ]
        },
        host: {
            name: "Paula Bloom",
            joinedYear: 2020,
            email: "paula@bloom.com",
            avatar: "/planet.jpg"
        }
    }
    ,
];


type Params = {
    accommodationId: string;
};


function AccommodationPage({ params }: { params: Params }) {
    const accommodationId = parseInt(params.accommodationId, 10);
    const selectedAccommodation = data.find(acc => acc.id === accommodationId);

    if (!selectedAccommodation) {
        return <div>Accommodation not found</div>;
    }

    return (
        <div>
            <Accomodations data={[selectedAccommodation]} />
        </div>
    );
}

export default AccommodationPage