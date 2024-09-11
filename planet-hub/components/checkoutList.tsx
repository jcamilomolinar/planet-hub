import * as React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  planet: string;
  price: string;
  timeTravel: string;
  hour: string;
}

const CheckoutList: React.FC = () => {
  const [cartAccommodations, setCartAccommodations] = React.useState<Accommodation[]>(() => {
    const storedItems = localStorage.getItem("cartAccommodations");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [cartItems, setCartItems] = React.useState<Flight[]>(() => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const handleRemoveAccommodation = (index: number) => {
    setCartAccommodations((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      localStorage.setItem("cartAccommodations", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const handleRemoveFlight = (index: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Display accommodations */}
        {cartAccommodations.length > 0 && (
          <>
            {cartAccommodations.map((accommodation, index) => (
              <Card key={index} className="shadow-2xl bg-white rounded-xl p-4 hover:scale-105 duration-200 ease-in-out">
                <CardHeader className="flex items-center flex-row gap-4">
                  <CardTitle className="text-xl font-semibold">{accommodation.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p>Host: {accommodation.host.name}</p>
                  <p>email: {accommodation.host.email}</p>                 
                </CardContent>
                <CardFooter>
                  <Button variant="default" onClick={() => handleRemoveAccommodation(index)}>Remove</Button>
                </CardFooter>
              </Card>
            ))}
          </>
        )}

        {/* Display flights */}
        {cartItems.length > 0 && (
          <>
            {cartItems.map((flight, index) => (
              <Card key={index} className="shadow-2xl bg-white rounded-xl p-4 hover:scale-105 duration-200 ease-in-out">
                <CardHeader className="flex items-center flex-row gap-4">
                  <CardTitle className="text-xl font-semibold">{flight.planet}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p>Price: {flight.price} $</p>
                  <p>Time: {flight.timeTravel} Hours</p>
                </CardContent>
                <CardFooter>
                  <Button variant="default" onClick={() => handleRemoveFlight(index)}>Remove</Button>
                </CardFooter>
              </Card>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutList;