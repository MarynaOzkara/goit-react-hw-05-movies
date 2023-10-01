import Cast from './Cast/Cast';
import Review from './Review/Review';
import MoviesPage from 'pages/MoviesPage';
import MoviePageById from 'pages/MoviePageById';
import { Route, Routes } from 'react-router-dom';
import SheredLayout from './SheredLayout/SheredLayout';
import HomePage from 'pages/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SheredLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MoviePageById />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
