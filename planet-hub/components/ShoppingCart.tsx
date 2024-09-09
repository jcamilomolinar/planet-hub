import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from 'next/link';
import { Button } from "@/components/ui/button"; // Adjust the path according to your project structure

// Dropdown container styles
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

// Cart item styles
const itemVariants = cva(
  "flex justify-between items-center border-b pb-2 last:border-none transition-colors",
  {
    variants: {
      variant: {
        default: "text-gray-900 hover:bg-gray-100",
        outline: "text-gray-800 hover:bg-gray-200",
        ghost: "text-gray-900 hover:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type CartProps = VariantProps<typeof dropdownVariants>;

type Flight = {
  planet: string;
  timeTravel: number;
  price: number;
  hour: string;
};

const ShoppingCart: React.FC<CartProps> = ({ variant, size }) => {
  const [cartItems, setCartItems] = React.useState<Flight[]>(() => {
    // Load items from local storage or default to an empty array
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [isDropdownOpen, setDropdownOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Save cartItems to localStorage whenever they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (index: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      // Update local storage with new cartItems
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return (
    <div className="relative">
      {/* Shopping Cart Icon */}
      <button
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className="relative flex items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        <AiOutlineShoppingCart size={24} />
        {/* Cart item count */}
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className={dropdownVariants({ variant, size })}>
          <h2 className="text-lg font-semibold mb-2">Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-2">
                {cartItems.map((flight, index) => (
                  <li key={index} className={itemVariants({ variant })}>
                    <div>
                      <p className="font-medium">Planet: {flight.planet}</p>
                      <p className="text-gray-500">Date: {flight.hour}</p>
                      <p className="text-gray-500">Time: {flight.hour}</p>
                      <p className="text-gray-500">Price: ${flight.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-700 font-semibold focus:outline-none"
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>

              {/* Checkout Button */}
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
