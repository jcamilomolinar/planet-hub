"use client";

import * as React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Flight = {
  planet: string;
  price: string;
  timeTravel: string;
};

const CheckoutList: React.FC = () => {
  const [cartItems, setCartItems] = React.useState<Flight[]>(() => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const handleConfirmOrder = () => {
    alert("Order confirmed!");
    window.location.href = "/confirmation";
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
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((flight, index) => (
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
          ))
        )}
      </div>
      <div className="mt-6">
        <Button variant="default" onClick={handleConfirmOrder} className="w-full">
          Confirm Order
        </Button>
      </div>
    </div>
  );
};

export default CheckoutList;
