import {
  BrowserRouter as Router, MemoryRouter, Switch, Route,
} from 'react-router-dom';
import './App.scss';
import NavBar from './components/navBar/navBar';
import Currencies from './components/currencies/currencies';
import Converter from './components/converter/converter';
import Details from './components/details/details';
import PageNotFound from './components/pageNotFound/pageNotFound';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Currencies} />
          <Route path="/details/:details" component={Details} />
          <Route path="/converter" component={Converter} />
          <Route path="/page-not-found" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
