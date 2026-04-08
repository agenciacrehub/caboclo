import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
    rating: number;
    maxStars?: number;
    className?: string;
    size?: number;
}

export function StarRating({ rating, maxStars = 5, className = "", size = 16 }: StarRatingProps) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className={`flex items-center gap-0.5 ${className}`}>
            {[...Array(fullStars)].map((_, i) => (
                <Star
                    key={`full-${i}`}
                    size={size}
                    className="fill-accent text-accent"
                />
            ))}

            {hasHalfStar && (
                <div className="relative">
                    <Star size={size} className="text-muted-foreground/30" />
                    <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                        <Star size={size} className="fill-accent text-accent" />
                    </div>
                </div>
            )}

            {[...Array(emptyStars)].map((_, i) => (
                <Star
                    key={`empty-${i}`}
                    size={size}
                    className="text-muted-foreground/30"
                />
            ))}
        </div>
    );
}
