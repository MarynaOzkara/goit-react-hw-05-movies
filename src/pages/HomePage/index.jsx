import { Title } from 'components/App.styled';
import TrendingMovie from 'components/TrendingMovie/TrendingMovie';
import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'api/movie-api';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await getTrendingMovie();
        if (!movies.length) {
          alert('There is no tranding movie!');
          return;
        }
        const moviesArray = movies.map(movie => ({
          id: movie.id,
          title: movie.title,
        }));
        setTrendingMovie(moviesArray);
        // console.log(movies);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);
  return (
    <main>
      <Title>Trending today</Title>
      {isLoading && <Loader />}
      <TrendingMovie trendingMovie={trendingMovie} />
    </main>
  );
};
export default HomePage;
