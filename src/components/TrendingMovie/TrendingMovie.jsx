import TrendingMovieItem from './TrendingMovieItem';

const TrendingMovie = ({ movie }) => {
  return (
    <ul>
      {movie.map(({ id, title }) => (
        <TrendingMovieItem key={id} title={title} id={id} />
      ))}
    </ul>
  );
};
export default TrendingMovie;
