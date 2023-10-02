import { useSearchParams } from 'react-router-dom';

const SearchMovieForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value.trim();
    if (!query) {
      alert('Type movie name to start search!');
    }

    setSearchParams({ query: query });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoFocus
          placeholder="Search movie ..."
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
export default SearchMovieForm;
