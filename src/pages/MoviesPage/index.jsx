import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'api/movie-api';
import TrendingMovie from 'components/TrendingMovie/TrendingMovie';

const MoviePage = () => {
  const [movie, setmovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  useEffect(() => {
    if (!query) {
      return;
    }
    const getSearchedMovie = async () => {
      try {
        setIsLoading(true);
        const searchedMovies = await searchMovie(query);
        const searchedMoviesArray = searchedMovies.map(movie => ({
          id: movie.id,
          title: movie.title,
        }));
        setmovie(searchedMoviesArray);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getSearchedMovie();
  }, [query]);
  return (
    <main>
      <SearchMovieForm />
      <TrendingMovie movie={movie} />
    </main>
  );
};
export default MoviePage;
