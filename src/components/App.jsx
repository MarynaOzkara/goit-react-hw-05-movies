import Cast from './Cast/Cast';
import Review from './Review/Review';
import { Route, Routes } from 'react-router-dom';
import SheredLayout from './SheredLayout/SheredLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage/index'));
const MoviesPage = lazy(() => import('pages/MoviesPage/index'));
const MoviePageById = lazy(() => import('pages/MoviePageById/index'));
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SheredLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviePageById />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
