import { Title } from "components/App.styled";
import TrendingMovie from "components/TrendingMovie/TrendingMovie";
import { useEffect } from "react";
import { getTrendingMovie } from "api/movie-api";

const HomePage = () => {
   useEffect(() => {
      const fetchMovies = async () => {
         try {
            const trendigMovie = await getTrendingMovie();
            console.log(trendigMovie);
         } catch {

         }
      }
      fetchMovies();
   })
   return (
      <>
         <Title>Trending today</Title>
         <TrendingMovie></TrendingMovie>
         
      </> 

   )
   
}
export default HomePage;