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
      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontWeight: 'bold' }}>Your selection</p>
        <p>{planet}</p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontWeight: 'bold' }}>Dates</p>
        <p>{dates}</p>
      </div>
      <div>
        <p style={{ fontWeight: 'bold' }}>Total (USD)</p>
        <p>{total}</p>
      </div>
    </CardContent>
  </Card>
);

export default TripSummary;

