import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import FormRecipe from './components/Forms/Recipe-Form';
//import { Route, useLocation } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <h1>Henry Food</h1>
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route exact path="/"><Landing /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/create"><FormRecipe /></Route>
          <Route path="*"><PageNotFound /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
