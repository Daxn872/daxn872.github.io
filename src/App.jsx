
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import { AppProvider } from '@/context/AppContext';
import LandingPage from '@/pages/LandingPage';

const App = () => {
  return (
    <AppProvider>
      <LandingPage />
      <Toaster />
    </AppProvider>
  );
};

export default App;
