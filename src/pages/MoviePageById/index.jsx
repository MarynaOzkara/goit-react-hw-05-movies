import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { getMovieDetails } from 'api/movie-api';
import {
  GenresList,
  MovieDetailsWrap,
  MainWrap,
  Poster,
  AdditionalWrap,
  BackBtn,
} from 'components/App.styled';

import Loader from 'components/Loader/Loader';

const MoviePageById = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const from = location.state ?? '/';
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setIsLoading(true);
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);

        // console.log(details);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesDetails();
  }, [movieId]);
  const handleClickBackBtn = () => {
    navigate(from);
    // console.log(from);
  };
  const { original_title, genres, overview, release_date, poster_path } =
    movieDetails;

  return (
    <main>
      {isLoading && <Loader />}

      <MovieDetailsWrap>
        <BackBtn type="button" onClick={handleClickBackBtn}>
          Go Back
        </BackBtn>

        <MainWrap>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
          />
          <div>
            <h2>
              {original_title}({release_date})
            </h2>
            <p>User score: </p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <GenresList>
              {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
            </GenresList>
          </div>
        </MainWrap>
        <AdditionalWrap>
          <h3>Aditional information</h3>
          <ul>
            <li>
              <Link to="cast" state={from}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={from}>
                Review
              </Link>
            </li>
          </ul>
        </AdditionalWrap>
        <Outlet />
      </MovieDetailsWrap>
    </main>
  );
};
export default MoviePageById;
