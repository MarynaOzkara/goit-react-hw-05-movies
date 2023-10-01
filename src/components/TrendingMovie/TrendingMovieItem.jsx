import { Link, useLocation } from 'react-router-dom';
import { MovieItem } from './TrendingMovieItem.styled';

const TrendingMovieItem = ({ title, id }) => {
  const location = useLocation();
  //   console.log(location);
  return (
    <MovieItem>
      <Link to={`movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </MovieItem>
  );
};
export default TrendingMovieItem;
