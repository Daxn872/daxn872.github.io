import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import { AppProvider } from '@/context/AppContext';
import { ThemeProvider } from '@/context/ThemeContext';
import AppRoutes from '@/routes';

const App = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppRoutes />
        <Toaster />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;