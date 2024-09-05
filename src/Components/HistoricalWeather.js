import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_HISTORICAL_WEATHER } from '../graphql/queries';
import { WiRain, WiDaySunny, WiCloud, WiDayCloudy } from 'react-icons/wi';

function HistoricalWeather({ location }) {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const { loading, error, data } = useQuery(GET_HISTORICAL_WEATHER, {
    variables: { location, from: fromDate, to: toDate },
    skip: !fromDate || !toDate,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getWeatherIcon = (icon) => {
    switch (icon) {
      case 'rain':
        return <WiRain className="w-8 h-8" />;
      case 'clear-day':
        return <WiDaySunny className="w-8 h-8" />;
      case 'partly-cloudy-day':
        return <WiDayCloudy className="w-8 h-8" />;
      case 'cloudy':
        return <WiCloud className="w-8 h-8" />;
      default:
        return null;
    }
  };

  return (
    <div className="shadow-md rounded-lg mt-4 p-6">
      <h2 className="text-2xl font-semibold mb-4">Historical Weather</h2>
      <form onSubmit={handleSubmit} className="mb-4 flex space-x-4">
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="border rounded p-2"
          required
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="border rounded p-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Fetch
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      
      {data && (
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Date</th>
              <th className="text-left p-2">Temperature</th>
              <th className="text-left p-2">Description</th>
              <th className="text-left p-2">Icon</th>
            </tr>
          </thead>
          <tbody>
            {data.historicalWeather.map((weather) => (
              <tr key={weather.id}>
                <td className="p-2">{new Date(parseInt(weather.date)).toLocaleDateString()}</td>
                <td className="p-2">{Math.round(weather.temperature)}°C</td>
                <td className="p-2">{weather.description}</td>
                <td className="p-2">{getWeatherIcon(weather.icon)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default HistoricalWeather;
