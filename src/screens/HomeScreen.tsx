import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { destinations } from '../data/destinations';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { DestinationFilters } from '../components/destinations/DestinationFilters';
import { DestinationDetail } from '../components/destinations/DestinationDetail';
import { Input } from '../components/ui/Input';
import { Filter } from '../types';

export const HomeScreen: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Filter>({
    season: [],
    type: [],
    difficulty: [],
  });

  const filteredDestinations = useMemo(() => {
    return destinations.filter(destination => {
      // Search filter
      const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          destination.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          destination.location.address.toLowerCase().includes(searchQuery.toLowerCase());

      // Season filter
      const matchesSeason = filters.season.length === 0 ||
                           destination.bestSeason.some(season => filters.season.includes(season));

      // Type filter
      const matchesType = filters.type.length === 0 ||
                         filters.type.includes(destination.type);

      // Difficulty filter
      const matchesDifficulty = filters.difficulty.length === 0 ||
                               (destination.difficulty && filters.difficulty.includes(destination.difficulty));

      return matchesSearch && matchesSeason && matchesType && matchesDifficulty;
    });
  }, [searchQuery, filters]);

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
            Discover Nepal
          </h1>
          <p className="text-gray-600">
            Explore the beauty of the Himalayas and rich cultural heritage
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              fullWidth
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <DestinationFilters
              filters={filters}
              onFiltersChange={setFilters}
            />
          </div>

          {/* Destinations Grid */}
          <div className="lg:col-span-3">
            {filteredDestinations.length > 0 ? (
              <>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredDestinations.map((destination) => (
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
                <Search size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No destinations found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};