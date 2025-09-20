import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  size = 'md',
  showValue = false,
  interactive = false,
  onChange,
}) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const handleClick = (rating: number) => {
    if (interactive && onChange) {
      onChange(rating);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }, (_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= Math.floor(value);
        const isHalfFilled = starValue === Math.ceil(value) && value % 1 !== 0;

        return (
          <button
            key={index}
            onClick={() => handleClick(starValue)}
            disabled={!interactive}
            className={`relative ${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform duration-150`}
          >
            <Star
              className={`${sizes[size]} ${
                isFilled
                  ? 'text-yellow-400 fill-yellow-400'
                  : isHalfFilled
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
            {isHalfFilled && (
              <Star
                className={`absolute inset-0 ${sizes[size]} text-yellow-400 fill-yellow-400`}
                style={{ clipPath: 'inset(0 50% 0 0)' }}
              />
            )}
          </button>
        );
      })}
      {showValue && (
        <span className="ml-2 text-sm text-gray-600">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
};