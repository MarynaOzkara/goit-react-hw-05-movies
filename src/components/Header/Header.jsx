import { NavLink } from "react-router-dom";
import { NavList, Navigation, NavItem } from "./Header.styled";

const Header = () => {
  return(
     <Navigation>
        <NavList>
            <NavItem>
                <NavLink to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/movies'>Movies</NavLink>
            </NavItem>
        </NavList>
     </Navigation>
  )  
}
export default Header;
