import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SheredLayout.styled";


const SheredLayout = () => {
    return (
        <>
        <Header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/movies'>Movies</Link>
            </nav>
        </Header>
        <Container>
            <Outlet/>
        </Container>
        </>
            
    )
}
export default SheredLayout;