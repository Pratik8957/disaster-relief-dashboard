import { createContext, useContext, useState } from "react";

const CityContext = createContext();

const cityData = {
  Ghaziabad: {
    lat: 28.6692,
    lng: 77.4538,
  },
  Delhi: {
    lat: 28.6139,
    lng: 77.2090,
  },
  Varanasi: {
    lat: 25.3176,
    lng: 82.9739,
  },
  Jaunpur: {
    lat: 25.7464,
    lng: 82.6837,
  },
};

export function CityProvider({ children }) {
  const [selectedCity, setSelectedCity] = useState("Ghaziabad");

  return (
    <CityContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        cityData,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  return useContext(CityContext);
}