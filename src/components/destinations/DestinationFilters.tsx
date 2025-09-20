import React from 'react';
import { Filter } from '../../types';
import { Button } from '../ui/Button';

interface DestinationFiltersProps {
  filters: Filter;
  onFiltersChange: (filters: Filter) => void;
}

export const DestinationFilters: React.FC<DestinationFiltersProps> = ({
  filters,
  onFiltersChange,
}) => {
  const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
  const types = ['Trekking', 'Cultural', 'Adventure', 'Religious'];
  const difficulties = ['Easy', 'Moderate', 'Difficult'];

  const toggleFilter = (category: keyof Filter, value: string) => {
    const currentValues = filters[category];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    onFiltersChange({
      ...filters,
      [category]: newValues,
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      season: [],
      type: [],
      difficulty: [],
    });
  };

  const hasActiveFilters = filters.season.length > 0 || filters.type.length > 0 || filters.difficulty.length > 0;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear All
          </Button>
        )}
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Season</h4>
        <div className="flex flex-wrap gap-2">
          {seasons.map((season) => (
            <Button
              key={season}
              size="sm"
              variant={filters.season.includes(season) ? 'primary' : 'outline'}
              onClick={() => toggleFilter('season', season)}
            >
              {season}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Type</h4>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <Button
              key={type}
              size="sm"
              variant={filters.type.includes(type) ? 'primary' : 'outline'}
              onClick={() => toggleFilter('type', type)}
            >
              {type}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Difficulty</h4>
        <div className="flex flex-wrap gap-2">
          {difficulties.map((difficulty) => (
            <Button
              key={difficulty}
              size="sm"
              variant={filters.difficulty.includes(difficulty) ? 'primary' : 'outline'}
              onClick={() => toggleFilter('difficulty', difficulty)}
            >
              {difficulty}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};