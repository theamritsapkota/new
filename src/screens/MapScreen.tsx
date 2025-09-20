import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { destinations } from '../data/destinations';
import { DestinationDetail } from '../components/destinations/DestinationDetail';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Rating } from '../components/ui/Rating';

export const MapScreen: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  const selectedDest = destinations.find(d => d.id === selectedDestination);

  if (selectedDest) {
    return (
      <DestinationDetail
        destination={selectedDest}
        onBack={() => setSelectedDestination(null)}
      />
    );
  }

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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 lg:p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Destination Map
          </h1>
          <p className="text-gray-600">
            Explore destinations across Nepal
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card padding="none" className="h-[600px] overflow-hidden">
              <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                {/* Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-200 via-sky-200 to-blue-300"></div>
                </div>

                {/* Map Content */}
                <div className="relative z-10 text-center">
                  <Navigation size={48} className="mx-auto mb-4 text-emerald-600" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Map</h3>
                  <p className="text-gray-600 mb-6">Map integration will be added here</p>
                  
                  {/* Destination Markers Simulation */}
                  <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                    {destinations.slice(0, 6).map((destination, index) => (
                      <button
                        key={destination.id}
                        onClick={() => setSelectedDestination(destination.id)}
                        onMouseEnter={() => setHoveredMarker(destination.id)}
                        onMouseLeave={() => setHoveredMarker(null)}
                        className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/80 hover:bg-white hover:scale-105 transition-all duration-200 shadow-sm"
                      >
                        <MapPin 
                          size={24} 
                          className={`${
                            hoveredMarker === destination.id ? 'text-emerald-600' : 'text-gray-600'
                          } transition-colors`}
                        />
                        <span className="text-xs font-medium text-gray-700 text-center line-clamp-2">
                          {destination.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Destination List */}
          <div className="lg:col-span-1">
            <Card>
              <h3 className="font-bold text-gray-900 mb-4">All Destinations</h3>
              <div className="space-y-3 max-h-[550px] overflow-y-auto">
                {destinations.map((destination) => (
                  <div
                    key={destination.id}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => setSelectedDestination(destination.id)}
                  >
                    <img
                      src={destination.images[0]}
                      alt={destination.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm truncate">
                        {destination.name}
                      </h4>
                      <div className="flex items-center gap-1 mt-1">
                        <Rating value={destination.rating} size="sm" />
                        <span className="text-xs text-gray-500">
                          ({destination.reviewCount})
                        </span>
                      </div>
                      <div className="mt-1">
                        <Badge variant={getTypeColor(destination.type)} size="sm">
                          {destination.type}
                        </Badge>
                      </div>
                    </div>
                    <MapPin size={16} className="text-gray-400" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};