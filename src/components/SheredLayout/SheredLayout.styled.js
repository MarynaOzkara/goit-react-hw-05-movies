import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
export const Header = styled.header`
  width: 100%;
  padding: 10px 0;
  padding-left: 50px;
  background-color: tomato;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  > nav {
    display: flex;
    gap: 30px;
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  padding: 4px 8px;
  border-radius: 4px;
  &.active {
    color: tomato;
    background-color: white;
  }
  &:hover,
  :focus {
    color: #5b5b5b;
  }
`;
