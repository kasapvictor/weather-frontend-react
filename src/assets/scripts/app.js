import onChange from 'on-change';
import api from './api';

export default () => {
  const elements = {
    formSearch: document['form-search'],
  };

  const config = {
    interval: 5 * 60 * 1000,
    days: 9,
    api: {
      url: 'https://api.openweathermap.org/data/2.5/onecall?',
      appid: `appid=${process.env.SECRET_KEY}`,
      exclude: '&exclude=minutely,hourly',
      units: '&units=metric',
    },
  };

  const state = {
    cities: [524894, 498817],
    lastUpdate: null,
    ui: {
      tableHeader: 0,
    },
    weather: [],
  };

  const watchedState = onChange(state, (path, value, prev) => {

  });

  // FORM SEARCH
};
