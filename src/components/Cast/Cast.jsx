import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/movie-api';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const actors = await getMovieCast(movieId);
        setActors(actors);

        console.log(actors);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      <ul>
        {actors.length === 0 ? (
          <div>There is no information about actors</div>
        ) : (
          actors.map(({ cast_id, original_name, character, profile_path }) => (
            <li key={cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={original_name}
              />
              <ul>
                <li>
                  <h4>Actor:</h4>
                  <p>{original_name}</p>
                </li>
                <li>
                  <h4>Character:</h4>
                  <p>{character}</p>
                </li>
              </ul>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default Cast;
