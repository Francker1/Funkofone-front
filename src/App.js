import React from 'react';
import { PhoneContext } from './components/PhoneContext';
import AppRouter from './routes/AppRouter';

const App = () => {
  const user = {
    name: 'Ítalo',
  };

  return (
    <PhoneContext.Provider value={user}>
      <AppRouter />
    </PhoneContext.Provider>
  );
};

export default App;
