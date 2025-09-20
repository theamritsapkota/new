import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { destinations } from '../data/destinations';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { DestinationDetail } from '../components/destinations/DestinationDetail';

export const FavoritesScreen: React.FC = () => {
  const { favorites } = useFavorites();
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const favoriteDestinations = destinations.filter(destination =>
    favorites.includes(destination.id)
  );

  const selectedDest = destinations.find(d => d.id === selectedDestination);

  if (selectedDest) {
    return (
      <DestinationDetail
        destination={selectedDest}
        onBack={() => setSelectedDestination(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 lg:p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Your Favorites
          </h1>
          <p className="text-gray-600">
            Destinations you've saved for later
          </p>
        </div>

        {favoriteDestinations.length > 0 ? (
          <>
            <div className="mb-6">
              <p className="text-sm text-gray-600">
                {favoriteDestinations.length} favorite destination{favoriteDestinations.length !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoriteDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  onClick={() => setSelectedDestination(destination.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Heart size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No favorites yet
            </h3>
            <p className="text-gray-600">
              Start exploring destinations and save the ones you love!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};