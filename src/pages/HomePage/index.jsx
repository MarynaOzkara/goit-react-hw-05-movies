import { Title } from "components/App.styled";
import TrendingMovie from "components/TrendingMovie/TrendingMovie";

const HomePage = () => {
   return (
      <>
         <Title>Trending today</Title>
         <TrendingMovie></TrendingMovie>
         
      </> 

   )
   
}
export default HomePage;