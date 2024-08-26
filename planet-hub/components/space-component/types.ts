import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconType } from 'react-icons';

export interface ServiceData {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    icon: IconDefinition;
}
export interface ValuationData {
    averageRating: number;
    totalRatings: number;
    categories: Category[];
}

export interface Category {
    name: string;
    rating: number;
    icon: React.ReactElement<IconType>;
}

export interface AccomodationsData {
    id: number;
    name: string;
    nameExtend: string;
    stars: number;
    numberReviews: number;
    descripcion: string;
    imageUrls: string[];
    services: ServiceData[];
    valuation: ValuationData;
}

export interface AccomodationsProps {
    data: AccomodationsData[];
}