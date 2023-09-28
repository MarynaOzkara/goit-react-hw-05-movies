import Layout from "layout";
import HomePage from "pages/HomePage";
import MoviesPage from "pages/MoviesPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
   
   <Routes>
     <Route path="/" element={<Layout/>}>
       <Route index element={<HomePage/>}/>
       <Route path="movies" element={<MoviesPage/>}/>
     </Route>     
   </Routes>
   
  );
};
export default App;
