import * as React from "react"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function SpaceCard() {
    return (
        <div className="container mx-auto p-4 m-4">
            <p className="text-2xl font-semibold">Cabaña Marte, Monte Olium</p>
            <div className="flex justify-normal gap-2">
                <FontAwesomeIcon icon={faStar} style={{ color: '#d46a17', fontSize: '2px', SizeIcon: '2px' }} className="w-6" />
                <span>4.3</span>
                <span>-</span>
                <span>
                    <Link href='/reviews' className="underline decoration-solid hover:text-palleteOrange">
                        20 reseñas
                    </Link>
                </span>
            </div>
            <div className="p-2 m-3">
                Ubicado en la imponente ladera del monte Olimpo, el Hotel Estelar Olympus redefine el concepto de lujo y aventura en el planeta rojo. Este exclusivo destino ofrece una experiencia inigualable para los viajeros espaciales más audaces.
                Características Destacadas:
                - Vistas Panorámicas: Disfruta de vistas ininterrumpidas del monte Olimpo y el vasto paisaje marciano desde nuestras habitaciones con paredes de vidrio inteligente que se adaptan a las condiciones atmosféricas para ofrecerte la mejor panorámica.
                Cúpulas de Gravedad Artificial: Nuestras lujosas suites están equipadas con cúpulas de gravedad artificial que simulan la gravedad terrestre, brindando una experiencia de confort y movilidad sin igual en Marte.
                Restaurante Intergaláctico: Saborea una exquisita gastronomía marciana y terrícola en nuestro restaurante de alta cocina, donde los chefs fusionan ingredientes exóticos con técnicas culinarias avanzadas. Prueba platos creados a partir de cultivos hidropónicos locales y recetas interplanetarias.
                Oasis de Relajación: Relájate en nuestro spa con vistas a la superficie de Marte, que ofrece tratamientos rejuvenecedores utilizando tecnologías avanzadas, desde masajes con vibración de microgravedad hasta envolturas nutritivas hechas con minerales marcianos.
                Actividades de Aventura: Atrévete a explorar el terreno marciano con nuestras excursiones guiadas en vehículos de tracción todo terreno o realiza caminatas en el cráter del monte Olimpo con equipamiento de última generación.
                Zona de Realidad Virtual Inmersiva: Sumérgete en experiencias virtuales que recrean paisajes y eventos históricos tanto de Marte como de la Tierra, proporcionando una inmersión completa en la historia y cultura interplanetaria.
                Observatorio Astronómico: Admira las estrellas y otros planetas desde nuestro observatorio de última tecnología, equipado con telescopios avanzados y un sistema de proyección holográfica para observar el cosmos en todo su esplendor.
                El Hotel Estelar Olympus no solo ofrece un lugar para hospedarse, sino una experiencia marciana completa que combina el lujo con la exploración y la innovación. Ven a ser parte de la próxima frontera en el turismo espacial y descubre lo que significa realmente vivir entre las estrellas.
            </div>
        </div>
    )
}
