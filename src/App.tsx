import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { AuthScreen } from './screens/AuthScreen';
import { HomeScreen } from './screens/HomeScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { MapScreen } from './screens/MapScreen';
import { RecommendationsScreen } from './screens/RecommendationsScreen';
import { Header } from './components/layout/Header';
import { LoadingScreen } from './components/ui/Loading';

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('home');

  if (loading) {
    return <LoadingScreen message="Loading Nepal Tourism..." />;
  }

  if (!user) {
    return <AuthScreen />;
  }

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'favorites':
        return <FavoritesScreen />;
      case 'map':
        return <MapScreen />;
      case 'recommendations':
        return <RecommendationsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      {renderScreen()}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <AppContent />
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;