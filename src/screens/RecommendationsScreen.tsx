import React from 'react';
import { Sparkles, TrendingUp, Clock, Users } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export const RecommendationsScreen: React.FC = () => {
  const comingSoonFeatures = [
    {
      icon: Sparkles,
      title: 'AI-Powered Recommendations',
      description: 'Get personalized destination suggestions based on your preferences and travel history.',
    },
    {
      icon: TrendingUp,
      title: 'Trending Destinations',
      description: 'Discover what\'s popular among travelers with similar interests.',
    },
    {
      icon: Clock,
      title: 'Seasonal Recommendations',
      description: 'Find the best destinations for your travel dates and weather preferences.',
    },
    {
      icon: Users,
      title: 'Social Recommendations',
      description: 'See where your friends have been and get recommendations from your network.',
    },
  ];

  const mockInsights = [
    {
      title: 'Based on your interests',
      items: ['Mountain Trekking', 'Cultural Sites', 'Photography'],
    },
    {
      title: 'Popular this season',
      items: ['Autumn Treks', 'Festival Tours', 'Wildlife Safaris'],
    },
    {
      title: 'Match your budget',
      items: ['Under $500', 'Mid-range Tours', 'Luxury Experiences'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 lg:p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Recommended for You
          </h1>
          <p className="text-gray-600">
            Personalized travel recommendations powered by AI
          </p>
        </div>

        {/* ML Coming Soon Banner */}
        <Card className="mb-8 bg-gradient-to-r from-emerald-50 to-sky-50 border-emerald-200">
          <div className="text-center">
            <Sparkles className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              AI Recommendations Coming Soon!
            </h2>
            <p className="text-gray-600 mb-4">
              We're developing an advanced machine learning system to provide personalized travel recommendations.
            </p>
            <Badge variant="info" size="md">
              MLOps Ready
            </Badge>
          </div>
        </Card>

        {/* Current Insights */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {mockInsights.map((insight, index) => (
            <Card key={index}>
              <h3 className="font-semibold text-gray-900 mb-3">{insight.title}</h3>
              <div className="space-y-2">
                {insight.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Upcoming Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Coming</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {comingSoonFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} hover>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Help Us Build Better Recommendations
          </h3>
          <p className="text-gray-600 mb-4">
            Your interactions with destinations help us understand your preferences better.
          </p>
          <Button variant="primary">
            Explore More Destinations
          </Button>
        </Card>
      </div>
    </div>
  );
};