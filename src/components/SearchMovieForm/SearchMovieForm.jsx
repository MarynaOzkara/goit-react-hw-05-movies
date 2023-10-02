import { useSearchParams } from 'react-router-dom';
import { FormWrap, Form, Input, SearchBtn } from './SearchMovieForm.styled';

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
    <FormWrap>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          autoFocus
          placeholder="Search movie ..."
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
    </FormWrap>
  );
};
export default SearchMovieForm;
