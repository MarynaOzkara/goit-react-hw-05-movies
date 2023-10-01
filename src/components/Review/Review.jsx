import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'api/movie-api';
import Loader from 'components/Loader/Loader';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        setIsLoading(true);
        const reviews = await getMovieReview(movieId);
        setReviews(reviews);

        console.log(reviews);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReview();
  }, [movieId]);
  return (
    <div>
      <ul>
        {isLoading && <Loader />}
        {reviews.length === 0 ? (
          <div>There is no review</div>
        ) : (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <b>{author}</b>
              <p>{content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default Review;
