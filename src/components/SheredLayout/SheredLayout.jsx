import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SheredLayout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const SheredLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
export default SheredLayout;
