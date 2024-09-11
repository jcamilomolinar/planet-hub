import * as React from "react";
import { AccomodationsData } from './types';
import Link from "next/link";

export default function SpaceTitle({ data }: { data: AccomodationsData }) {
  const handleAddToCart = () => {
    const storedAccomodations = localStorage.getItem("cartAccommodations");
    const cartAccomodations = storedAccomodations ? JSON.parse(storedAccomodations) : [];

    const newAccommodation = {
      name: data.name,
      host: data.host,
      id: data.id,
    };

    const updatedCart = [...cartAccomodations, newAccommodation];
    localStorage.setItem("cartAccommodations", JSON.stringify(updatedCart));

    alert(`${data.name} has been added to your accommodations cart!`);
  };

  return (
    <div className='flex justify-between items-center p-4'>
      {/* Title Div */}
      <div>
        <p className='text-textTitle text-4xl font-bold'>{data.name}</p>
      </div>

      {/* Div compartir, megusta */}
      <div className='flex justify-normal gap-4'>
        {/* Div compartir */}
        <div>
          <Link href="/" className="hover:bg-gray-200 rounded-full p-2">🔗 Share</Link>
        </div>
        {/* Div me gusta */}
        <div>
          <Link href="/" className="hover:bg-gray-200 rounded-full p-2">❤️ Like</Link>
        </div>

        {/* Add to cart */}
        <div>
          <button
            onClick={handleAddToCart}
            className="hover:bg-gray-200 rounded-full p-2"
          >
            🛒  Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
