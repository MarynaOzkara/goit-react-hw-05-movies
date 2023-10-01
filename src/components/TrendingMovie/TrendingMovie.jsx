import TrendingMovieItem from "./TrendingMovieItem";

const TrendingMovie = ({trendingMovie}) => {
    return(
        <ul>{
            trendingMovie.map(({id, title}) => (
                <TrendingMovieItem 
                  key={id}
                  title={title}
                  id={id}
                />
            ))
            }
            
        </ul>
    )
}
export default TrendingMovie;