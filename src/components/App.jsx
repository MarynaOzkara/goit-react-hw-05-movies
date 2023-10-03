import { Navigate, Route, Routes } from 'react-router-dom';
import SheredLayout from './SheredLayout/SheredLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage/index'));
const MoviesPage = lazy(() => import('pages/MoviesPage/index'));
const MoviePageById = lazy(() => import('pages/MoviePageById/index'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Review = lazy(() => import('components/Review/Review'));
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
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
