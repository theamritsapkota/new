import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Clock, DollarSign, Heart, Star, User } from 'lucide-react';
import { Destination } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Rating } from '../ui/Rating';
import { Card } from '../ui/Card';
import { useFavorites } from '../../context/FavoritesContext';
import { reviews } from '../../data/reviews';

interface DestinationDetailProps {
  destination: Destination;
  onBack: () => void;
}

export const DestinationDetail: React.FC<DestinationDetailProps> = ({
  destination,
  onBack,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [newReview, setNewReview] = useState('');

  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const favorited = isFavorite(destination.id);

  const destinationReviews = reviews.filter(r => r.destinationId === destination.id);

  const handleFavoriteClick = () => {
    if (favorited) {
      removeFromFavorites(destination.id);
    } else {
      addToFavorites(destination.id);
    }
  };

  const handleSubmitReview = () => {
    // In a real app, this would submit to an API
    console.log('Submitting review:', { rating: newRating, review: newReview });
    setShowReviewForm(false);
    setNewReview('');
    setNewRating(5);
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={onBack}>
            Back
          </Button>
          <h1 className="text-xl font-bold text-gray-900">{destination.name}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Image Gallery */}
        <Card padding="none" className="overflow-hidden">
          <div className="relative">
            <img
              src={destination.images[currentImageIndex]}
              alt={destination.name}
              className="w-full h-96 object-cover"
            />
            
            {/* Image Navigation */}
            {destination.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-2">
                  {destination.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Favorite Button */}
            <Button
              variant="ghost"
              size="sm"
              icon={Heart}
              onClick={handleFavoriteClick}
              className={`absolute top-4 right-4 bg-white/90 hover:bg-white ${
                favorited ? 'text-red-500' : 'text-gray-600'
              }`}
            />
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <Card>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant={getTypeColor(destination.type)}>{destination.type}</Badge>
                {destination.difficulty && (
                  <Badge variant={getDifficultyColor(destination.difficulty)}>
                    {destination.difficulty}
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Rating value={destination.rating} size="md" showValue />
                <span className="text-sm text-gray-500">({destination.reviewCount} reviews)</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{destination.fullDescription}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={18} />
                  <span>{destination.location.address}</span>
                </div>
                {destination.duration && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={18} />
                    <span>{destination.duration}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} />
                  <span>Best: {destination.bestSeason.join(', ')}</span>
                </div>
                {destination.price && (
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                    <DollarSign size={18} />
                    <span>From ${destination.price}</span>
                  </div>
                )}
              </div>
            </Card>

            {/* Reviews Section */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Reviews</h2>
                <Button
                  variant="primary"
                  size="sm"
                  icon={Star}
                  onClick={() => setShowReviewForm(!showReviewForm)}
                >
                  Write Review
                </Button>
              </div>

              {/* Review Form */}
              {showReviewForm && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-3">Write a Review</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rating
                      </label>
                      <Rating
                        value={newRating}
                        interactive
                        onChange={setNewRating}
                        size="lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Review
                      </label>
                      <textarea
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        placeholder="Share your experience..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        rows={4}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleSubmitReview}
                        disabled={!newReview.trim()}
                      >
                        Submit Review
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowReviewForm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews List */}
              <div className="space-y-4">
                {destinationReviews.length > 0 ? (
                  destinationReviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex items-start gap-3">
                        <img
                          src={review.userAvatar}
                          alt={review.userName}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-gray-900">{review.userName}</h4>
                            <Rating value={review.rating} size="sm" />
                          </div>
                          <p className="text-sm text-gray-500 mb-2">
                            {new Date(review.date).toLocaleDateString()}
                          </p>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Star size={48} className="mx-auto mb-3 text-gray-300" />
                    <p>No reviews yet. Be the first to share your experience!</p>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <Card>
              <h3 className="font-bold text-gray-900 mb-3">Location</h3>
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={32} className="mx-auto mb-2" />
                  <p className="text-sm">Map integration</p>
                  <p className="text-xs">Lat: {destination.location.lat}</p>
                  <p className="text-xs">Lng: {destination.location.lng}</p>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card>
              <h3 className="font-bold text-gray-900 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Button fullWidth variant="primary" icon={Heart}>
                  {favorited ? 'Remove from Favorites' : 'Add to Favorites'}
                </Button>
                <Button fullWidth variant="outline" icon={User}>
                  Book Tour Guide
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};