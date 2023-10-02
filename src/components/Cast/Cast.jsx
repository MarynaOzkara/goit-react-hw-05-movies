import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/movie-api';
import {
  ActorsWrap,
  ActorsList,
  ActorItem,
  ActorImg,
  InfoList,
  InfoItem,
} from './Cast.styled';

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
    <ActorsWrap>
      {isLoading && <Loader />}
      <ActorsList>
        {actors.length === 0 ? (
          <div>There is no information about actors</div>
        ) : (
          actors.map(({ cast_id, original_name, character, profile_path }) => (
            <ActorItem key={cast_id}>
              <ActorImg
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://place-hold.it/200x300?text=No%20Actor%20Image&fontsize=18`
                }
                alt={original_name}
              />
              <InfoList>
                <InfoItem>
                  <h4>Actor:</h4>
                  <p>{original_name}</p>
                </InfoItem>
                <InfoItem>
                  <h4>Character:</h4>
                  <p>{character}</p>
                </InfoItem>
              </InfoList>
            </ActorItem>
          ))
        )}
      </ActorsList>
    </ActorsWrap>
  );
};
export default Cast;
