import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import MaxValueComponent from "./components/MaxValueComponent";

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const numbers = [1, 5, 3, 9, 2, 7, 4]; // Ejemplo de arreglo de números

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2500);
  }, []);

  return (
    <div className="app">
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <MaxValueComponent numbers={numbers} />
      )}
    </div>
  );
};

export default App;
