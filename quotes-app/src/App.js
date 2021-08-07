
import './App.css';
import { Home } from './pages/Home/Home';
import { CategoryQuote } from './pages/CategoryQuote/CategoryQuote';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/quote/:category" component={CategoryQuote} />
        <Redirect exact path="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
