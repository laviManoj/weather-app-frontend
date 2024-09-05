import React from 'react';

function WeatherIcon({ icon, className }) {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return <img src={iconUrl} alt="Weather icon" className={className} />;
}

export default WeatherIcon;
