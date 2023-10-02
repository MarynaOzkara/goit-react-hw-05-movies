import { useLocation } from 'react-router-dom';
import { MovieItem, MovieLink } from './TrendingMovieItem.styled';

const TrendingMovieItem = ({ title, id }) => {
  const location = useLocation();
  // console.log(location);
  return (
    <MovieItem>
      <MovieLink to={`/movies/${id}`} state={location}>
        {title}
      </MovieLink>
    </MovieItem>
  );
};
export default TrendingMovieItem;
