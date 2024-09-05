import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_WEATHER } from '../graphql/queries';
import WeatherIcon from './WeatherIcon';
import { ChevronDown, Sun } from 'lucide-react';


function CurrentWeather({ location }) {
  const { loading, error, data } = useQuery(GET_CURRENT_WEATHER, {
    variables: { location },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { temperature, description, icon, date } = data.currentWeather;
  const dates = new Date(date);

  const formattedDate = dates.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });

  return (
    <div className="bg-orange-100 rounded-3xl p-4 text-center w-50">
    <div className="flex justify-between items-center text-orange-300">
      <span>{formattedDate}</span>
      <ChevronDown size={20} />
    </div>
    <div className="flex items-center justify-center space-x-2 text-7xl text-orange-400 my-6">
    <WeatherIcon icon={icon} className="w-16 h-16 mr-4" />
      <span>{Math.round(temperature)}°C</span>
    </div>
    <div className="text-orange-400 text-2xl">{description}</div>
    <div className="text-orange-300 text-xs mt-1">{formattedDate}</div>
    <div className="text-orange-300 text-xs mt-6">
      Feels like 30 · Sunset 18:20
    </div>
  </div>
  );
}

export default CurrentWeather;
