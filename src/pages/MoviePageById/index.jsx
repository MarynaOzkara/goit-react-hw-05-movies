import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import { getMovieDetails } from 'api/movie-api';
import {
  GenresList,
  MovieDetailsWrap,
  MainWrap,
  Poster,
  AdditionalWrap,
  BackBtn,
  MoreLink,
  MovieTitle,
  MovieInfo,
} from 'components/App.styled';

import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';

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
  const {
    original_title,
    genres,
    overview,
    release_date,
    poster_path,
    vote_average,
  } = movieDetails;
  const userScore = Number(vote_average).toFixed(1);
  return (
    <main>
      {isLoading && <Loader />}
      {movieDetails && (
        <MovieDetailsWrap>
          <BackBtn type="button" onClick={handleClickBackBtn}>
            Go Back
          </BackBtn>

          <MainWrap>
            <Poster
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : `https://place-hold.it/300x455?text=No%20Poster%20Image&fontsize=18`
              }
              alt={original_title}
            />
            <div>
              <MovieTitle>
                {original_title}({release_date})
              </MovieTitle>
              <p>User score: {userScore}</p>
              <MovieInfo>Overview</MovieInfo>
              <p>{overview}</p>
              <MovieInfo>Genres</MovieInfo>
              <GenresList>
                {genres &&
                  genres.map(({ id, name }) => <li key={id}>{name}</li>)}
              </GenresList>
            </div>
          </MainWrap>
          <AdditionalWrap>
            <h3>Aditional information</h3>
            <ul>
              <li>
                <MoreLink to="cast" state={from}>
                  Cast
                </MoreLink>
              </li>
              <li>
                <MoreLink to="reviews" state={from}>
                  Review
                </MoreLink>
              </li>
            </ul>
          </AdditionalWrap>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MovieDetailsWrap>
      )}
    </main>
  );
};
export default MoviePageById;
