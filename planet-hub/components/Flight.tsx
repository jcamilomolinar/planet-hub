"use client"

import { useState } from 'react';
import {
  Card,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
export function Flight({ timeTravel, planet, price, hour, date, showButton }: { timeTravel: number, planet: string, price: number, hour: string, date: string, showButton: boolean }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const updatedItems = [...storedItems, { planet, timeTravel, price, hour }];
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    setIsSelected(true);
  };

  return (
    <Card className="grid grid-cols-3 grid-rows-1 hover:border-palleteOrange duration-150 ease-in-out">
      <div className="flex justify-around">
        <div className="flex items-center gap-5 m-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="PlanetHub Logo" />
            <AvatarFallback>PH</AvatarFallback>
          </Avatar>
          <CardTitle className="text-textTitle">PlanetHub Terminal</CardTitle>
        </div>
      </div>
      <div className="flex items-center justify-around gap-10">
        <p className="text-textAll italic">{date}</p>
        <p className="text-textAll text-xl italic">{hour}</p>
        <p className="text-textAll text-xl italic">{planet}</p>
        <p><span className="text-textAll text-xl font-bold">{timeTravel}</span> Hours at light speed!</p>
        <p className="text-textAll"><span className="text-textAll text-xl font-bold">$</span> {price}</p>
      </div>
      {
          showButton && (<div className="grid items-center justify-items-center">
                          <Button
                            className="w-2/3"
                            variant="outline"
                            onClick={handleSelect}
                          >
                            {isSelected ? "Selected" : "Select"}
                          </Button>
                        </div>)
      }
    </Card>
  );
}

