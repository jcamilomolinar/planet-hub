"use client"; 
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TripSummary from "@/components/TripSummary";
import PaymentForm from "@/components/PaymentForm";

// Funciones para formatear los campos de entrada
const formatNumericInput = (value: string, format: (value: string) => string): string => {
  const numbersOnly = value.replace(/\D/g, '');
  return format(numbersOnly);
};

const formatCardNumber = (value: string) => {
  const groups = value.match(/.{1,4}/g);
  return groups ? groups.join(' ') : '';
};

const formatExpirationDate = (value: string) => {
  const groups = value.match(/.{1,2}/g);
  return groups ? groups.join('/') : '';
};

const formatCVV = (value: string) => value.substring(0, 4);

const formatZIPCode = (value: string) => value;

const PaymentGatewayPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [region, setRegion] = useState('');

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatNumericInput(e.target.value, formatCardNumber);
    setCardNumber(formattedValue);
  };

  const handleExpirationDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatNumericInput(e.target.value, formatExpirationDate);
    setExpirationDate(formattedValue);
  };

  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatNumericInput(e.target.value, formatCVV);
    setCVV(formattedValue);
  };

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatNumericInput(e.target.value, formatZIPCode);
    setZipCode(formattedValue);
  };

  return (
    <Card className="w-auto">
      <CardHeader>
        <CardTitle>Confirm and pay</CardTitle>
        <CardDescription>Please confirm your purchase details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-auto items-center gap-10">
          <div className="flex flex-col w-1/2 space-y-1.5">

            <TripSummary planet="planet1" dates="Sep 8 - 11" total="$900" />

            <div style={{ marginBottom: '20px' }}></div>

            <PaymentForm
              cardNumber={cardNumber}
              expirationDate={expirationDate}
              cvv={cvv}
              zipCode={zipCode}
              region={region}
              onCardNumberChange={handleCardNumberChange}
              onExpirationDateChange={handleExpirationDateChange}
              onCVVChange={handleCVVChange}
              onZipCodeChange={handleZipCodeChange}
              onRegionChange={setRegion}
            />
            
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-20">
        <Button variant="default" onClick={() => console.log('Pago confirmado')}>Confirm and pay</Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentGatewayPage;
