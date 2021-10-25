import React from 'react';
import ReactDOM from 'react-dom';
import TiposEventos from './pages/tipoEventos/TipoEventos'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './index.css';
import Home from './pages/home/App';
import reportWebVitals from './reportWebVitals';
import NotFound from './pages/notFound/NotFound';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tiposeventos" component={TiposEventos}/>
        <Route path="/notfound" component={NotFound}/>
        {/* <Route path="/" component={NotFound}/> */}
        <Redirect  to="/notfound"/>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
