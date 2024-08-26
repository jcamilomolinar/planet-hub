import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <div className="mb-5">
        <p className="font-bold">Your selection</p>
        <p>{planet}</p>
      </div>
      <div className="mb-5">
        <p className="font-bold">Dates</p>
        <p>{dates}</p>
      </div>
      <div>
        <p className="font-bold">Total (USD)</p>
        <p>{total}</p>
      </div>
    </CardContent>
  </Card>
);

export default TripSummary;

