import { gql } from '@apollo/client';

export const GET_CURRENT_WEATHER = gql`
  query GetCurrentWeather($location: String!) {
    currentWeather(location: $location) {
      id
      location
      temperature
      description
      icon
      date  
    }
  }
`;

export const GET_HISTORICAL_WEATHER = gql`
  query GetHistoricalWeather($location: String!, $from: String!, $to: String!) {
    historicalWeather(location: $location, from: $from, to: $to) {
      id
      location
      temperature
      description
      icon
      date
    }
  }
`;