import { Category } from "../enums/category";
import { Rating } from "../enums/rating";

export interface Movie {
    id: number;
    title: string;
    posterUrl: string;
    category: Category;
    rating: Rating;
    description: string;
    releaseYear: number;
    director?: string;
}
