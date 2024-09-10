import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CheckoutList from "./checkoutList";

interface TripSummaryProps {
  planet: string;
  dates: string;
  total: string;
}

const TripSummary: React.FC<TripSummaryProps> = ({ planet, dates, total }) => (
  <Card className="w-auto">
    <CardHeader>
      <CardTitle>Trip Summary</CardTitle>
      <CardDescription>Details of your selection</CardDescription>
    </CardHeader>
    <CardContent>
      <CheckoutList />
    </CardContent>
  </Card>
);

export default TripSummary;

