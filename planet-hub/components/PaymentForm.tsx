import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PaymentFormProps {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  zipCode: string;
  region: string;
  onCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExpirationDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCVVChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onZipCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRegionChange: (value: string) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  cardNumber,
  expirationDate,
  cvv,
  zipCode,
  region,
  onCardNumberChange,
  onExpirationDateChange,
  onCVVChange,
  onZipCodeChange,
  onRegionChange,
}) => (
  <form>
    <Label className="px-3" htmlFor="card-number">Credit or debit card number</Label>
    <div style={{ marginBottom: '20px' }}>
      <Input
        id="card-number"
        name="card-number"
        type="text"
        maxLength={19}
        placeholder="0000 0000 0000 0000"
        inputMode="numeric"
        pattern="[0-9]*"
        value={cardNumber}
        onChange={onCardNumberChange}
      />
    </div>

    <Label className="px-3" htmlFor="expiration">Expiration</Label>
    <div style={{ marginBottom: '20px' }}>
      <Input
        id="expiration"
        name="expiration"
        type="text"
        maxLength={5}
        placeholder="MM/YY"
        inputMode="numeric"
        pattern="[0-9]*"
        value={expirationDate}
        onChange={onExpirationDateChange}
      />
    </div>

    <Label className="px-3" htmlFor="cvv">CVV</Label>
    <div style={{ marginBottom: '20px' }}>
      <Input
        id="cvv"
        name="cvv"
        type="text"
        maxLength={4}
        placeholder="CVV"
        inputMode="numeric"
        pattern="[0-9]*"
        value={cvv}
        onChange={onCVVChange}
      />
    </div>

    <Label className="px-3" htmlFor="zip-code">ZIP Code</Label>
    <div style={{ marginBottom: '20px' }}>
      <Input
        id="zip-code"
        name="zip-code"
        type="text"
        maxLength={10}
        placeholder="999000"
        inputMode="numeric"
        pattern="[0-9]*"
        value={zipCode}
        onChange={onZipCodeChange}
      />
    </div>

    <Label className="px-3" htmlFor="region">Region</Label>
    <Select onValueChange={onRegionChange}>
      <SelectTrigger id="region">
        <SelectValue placeholder="Select a region" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value="region1">region1</SelectItem>
        <SelectItem value="region2">region2</SelectItem>
        <SelectItem value="region3">region3</SelectItem>
        <SelectItem value="region4">region4</SelectItem>
        <SelectItem value="region5">region5</SelectItem>
      </SelectContent>
    </Select>
  </form>
);

export default PaymentForm;
