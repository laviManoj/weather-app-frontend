import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CurrentWeather from './Components/CurrentWeather';
import HistoricalWeather from './Components/HistoricalWeather';
import HourlyForecast from './Components/HourlyForecast';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [location, setLocation] = useState('Delhi');

  const hourlyForecast = [
    { time: 'Now', temp: 25 },
    { time: '2 AM', temp: 25 },
    { time: '3 AM', temp: 23 },
    { time: '4 AM', temp: 22 },
    { time: '5 AM', temp: 20 },
    { time: '6 AM', temp: 25 },
    { time: '7 AM', temp: 25 },
    { time: '8 AM', temp: 23 },
    { time: '9 AM', temp: 22 },
    { time: '10 AM', temp: 20 },
  ];

  return (
    <ApolloProvider client={client}>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('./Assets/wallpaper.jpg')` }}
      >
        <div className="bg-white bg-opacity-70 p-6 sm:p-8 rounded-lg shadow-xl flex flex-col items-center w-full max-w-md sm:max-w-lg lg:max-w-2xl">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Weather App</h1>
          <select
            className="mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none w-full max-w-xs"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="Delhi">Delhi</option>
            <option value="Moscow">Moscow</option>
            <option value="Paris">Paris</option>
            <option value="New York">New York</option>
            <option value="Sydney">Sydney</option>
            <option value="Riyadh">Riyadh</option>
          </select>

          {/* Flex container for CurrentWeather and HourlyForecast */}
          <div className="flex flex-col sm:flex-row justify-between w-full space-y-6 sm:space-y-0 sm:space-x-6">
            <CurrentWeather location={location} className="flex-1" />
            <HourlyForecast forecast={hourlyForecast} className="flex-1" />
          </div>

          <HistoricalWeather location={location} className="mt-6 w-full" />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
