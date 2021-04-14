import React from 'react';
import { PhoneContext } from './components/PhoneContext';
import AppRouter from './routes/AppRouter';

const App = () => {
  // This simulates for example a login data saved in localStorage, sessionStorage or another way and provides this data through useContext to all App
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
