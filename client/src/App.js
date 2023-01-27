import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import RecipeForm from './components/Forms/Recipe-Form';
//import RecipeFull from './components/Recipe/Recipe-Full';

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div >
      {pathname !== "/" &&  <NavBar />}
      {/* NavBar solo aparece en Páginas Específicas
        {pathname !== "/" && (["/home","/create"].findIndex(e => e.includes(pathname)) >= 0) && <NavBar />}
      */}
       <Routes>
          <Route exact path={"/"} element={<Landing/>}> </Route>
          <Route path="/home" element={<Home/>}></Route>
          {/* <Route path="/recipe/:id" props={id} element={<RecipeFull/>}></Route> */}
          <Route path="/create" element={<RecipeForm/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
