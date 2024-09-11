import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from 'next/link';
import { Button } from "@/components/ui/button"; 
import {
    ShoppingCartIcon
} from "lucide-react"

const dropdownVariants = cva(
  "absolute right-0 mt-2 bg-white border shadow-lg p-4 rounded-md z-50 transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        default: "border-gray-300 bg-white text-gray-900",
        outline: "border-gray-300 bg-gray-50 text-gray-800",
        ghost: "bg-transparent text-gray-900 border-none",
      },
      size: {
        sm: "w-48 p-3",
        default: "w-64 p-4",
        lg: "w-80 p-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const itemVariants = cva(
  "flex justify-between items-center border-b pb-2 last:border-none transition-colors",
  {
    variants: {
      variant: {
        default: "text-white-200 hover:bg-gray-100",
        outline: "text-white-800 hover:bg-gray-200",
        ghost: "text-white-900 hover:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type CartProps = VariantProps<typeof dropdownVariants>;

interface Accommodation {
  name: string;
  host: {
    name: string;
    joinedYear: number;
    email: string;
    avatar: string;
  };
  id: number;
}

interface Flight {
  planet: String;
  hour: String
  price: number;
  timeTravel: number;
}

const ShoppingCart: React.FC<CartProps> = ({ variant, size }) => {
  const [cartItems, setCartItems] = React.useState<Flight[]>(() => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [cartAccommodations, setCartAccommodations] = React.useState<Accommodation[]>(() => {
    const storedAccommodations = localStorage.getItem("cartAccommodations");
    return storedAccommodations ? JSON.parse(storedAccommodations) : [];
  });

  const [isDropdownOpen, setDropdownOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    
    if (cartAccommodations.length > 0) {
      localStorage.setItem("cartAccommodations", JSON.stringify(cartAccommodations));
    }
  }, [cartItems, cartAccommodations]);

  const removeFlightFromCart = (index: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      return updatedItems;
    });
  };

  const removeAccommodationFromCart = (index: number) => {
    setCartAccommodations((prevAccommodations) => {
      const updatedAccommodations = prevAccommodations.filter((_, i) => i !== index);
      return updatedAccommodations;
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className="relative flex items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        <ShoppingCartIcon color="white" />
        
        {(cartItems.length + cartAccommodations.length) > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartItems.length + cartAccommodations.length}
          </span>
        )}
      </button>

      {isDropdownOpen && (
        <div className={dropdownVariants({ variant, size })}>
          <h2 className="text-lg font-semibold mb-2">Shopping Cart</h2>
          {cartItems.length === 0 && cartAccommodations.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-2">
                {cartItems.map((flight, index) => (
                  <li key={index} className={itemVariants({ variant })}>
                    <div>
                      <p className="font-medium">Planet: {flight.planet}</p>
                      <p className="text-gray-500">Time: {flight.timeTravel} hours</p>
                      <p className="text-gray-500">Price: ${flight.price}</p>
                    </div>
                    <button
                      onClick={() => removeFlightFromCart(index)}
                      className="text-red-500 hover:text-red-700 font-semibold focus:outline-none"
                    >
                      X
                    </button>
                  </li>
                ))}

                {cartAccommodations.map((accommodation, index) => (
                  <li key={index} className={itemVariants({ variant })}>
                    <div>
                      <p className="font-medium">Accommodation: {accommodation.name}</p>
                      <p className="text-gray-500">Host: {accommodation.host.name}</p>
                    </div>
                    <button
                      onClick={() => removeAccommodationFromCart(index)}
                      className="text-red-500 hover:text-red-700 font-semibold focus:outline-none"
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>

              <Link href="/checkout" passHref>
                <Button variant="default" className="mt-4 w-full">
                  Go to Checkout
                </Button>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

  

export default ShoppingCart;