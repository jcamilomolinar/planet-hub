export interface AccommodationsData {
    id: number;
    name: string;
    nameExtend: string;
    stars: number;
    numberReviews: number;
    descripcion: string;
    imageUrls: readonly string[];
    services: readonly {
        id: number;
        title: string;
        description: string;
        imageUrl: string;
        icon: string;
    }[];
    valuation: {
        averageRating: number;
        totalRatings: number;
        categories: readonly {
            name: string;
            rating: number;
            icon: string;
        }[];
    };
    host: {
        name: string;
        joinedYear: number;
        email: string;
        avatar: string;
    };
}