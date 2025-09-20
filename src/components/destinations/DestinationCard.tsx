import React from 'react';
import { MapPin, Clock, DollarSign, Heart } from 'lucide-react';
import { Destination } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Rating } from '../ui/Rating';
import { Button } from '../ui/Button';
import { useFavorites } from '../../context/FavoritesContext';

interface DestinationCardProps {
  destination: Destination;
  onClick: () => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onClick,
}) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const favorited = isFavorite(destination.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (favorited) {
      removeFromFavorites(destination.id);
    } else {
      addToFavorites(destination.id);
    }
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'Easy': return 'success';
      case 'Moderate': return 'warning';
      case 'Difficult': return 'error';
      default: return 'default';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Trekking': return 'info';
      case 'Cultural': return 'success';
      case 'Adventure': return 'warning';
      case 'Religious': return 'default';
      default: return 'default';
    }
  };

  return (
    <Card hover className="overflow-hidden" padding="none" onClick={onClick}>
      <div className="relative">
        <img
          src={destination.images[0]}
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={getTypeColor(destination.type)} size="sm">
            {destination.type}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          icon={Heart}
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 bg-white/90 hover:bg-white ${
            favorited ? 'text-red-500' : 'text-gray-600'
          }`}
        />
        {destination.difficulty && (
          <div className="absolute bottom-3 left-3">
            <Badge variant={getDifficultyColor(destination.difficulty)} size="sm">
              {destination.difficulty}
            </Badge>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{destination.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{destination.shortDescription}</p>

        <div className="flex items-center gap-2 mb-3">
          <Rating value={destination.rating} size="sm" showValue />
          <span className="text-xs text-gray-500">({destination.reviewCount} reviews)</span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={14} />
            <span className="truncate">{destination.location.address}</span>
          </div>
          {destination.duration && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock size={14} />
              <span>{destination.duration}</span>
            </div>
          )}
          {destination.price && (
            <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
              <DollarSign size={14} />
              <span>From ${destination.price}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1">
          {destination.bestSeason.map((season) => (
            <Badge key={season} variant="info" size="sm">
              {season}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};