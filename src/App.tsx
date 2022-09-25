import React from 'react';
import './components/dashboard/App.css';
import AppContextProvider from "./contexts/appContext/appContext";
import Routers from "./routes";

function App() {
  return (
    <AppContextProvider>
      <Routers/>
      </AppContextProvider>
  );
}

export default App;
