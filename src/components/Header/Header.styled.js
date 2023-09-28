import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 100%;
  padding-left: 20px;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: tomato;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  a {
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    color: #5b5b5b;
  }
  a:hover,
  a:focus {
    color: white;
  }
  a.active {
    color: white;
    text-decoration: underline;
  }
`;
export const NavList = styled.ul`
  display: flex;
  gap: 30px;
`;
export const NavItem = styled.li`
  list-style: none;
`;
export const NavLink = styled.a`
  color: #fff;
`;
