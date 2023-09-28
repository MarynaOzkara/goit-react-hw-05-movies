import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '9cbfb65f6dca8309534fd5a09da9382d';
const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const getTrendingMovie = async () => {
  const { data } = await axios.get(`trending/movie/day`, params);
  return data.results;
};
