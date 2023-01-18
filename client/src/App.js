import './App.css';
import { Routes } from "react-router-dom";
import { Route, useLocation } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import FormRecipe from './components/Forms/Recipe-Form';
import RecipeFull from './components/Recipe/Recipe-Full';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <h1>Henry Food</h1>
      <NavBar></NavBar>
       <Routes>
          <Route exact path={"/"} element={<Landing/>}> </Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/recipe/:recipeId" element={<RecipeFull/>}></Route>
          <Route path="/create" element={<FormRecipe/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
