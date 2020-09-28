import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Series from './components/Series';

//  au lieu de faire un component et l'importer, je fait une directement function du contenu a afficher si je tape ex: http://localhost:3000/bhjdgj

function pageNotFound() {
  return (
    <div>
      <h2> Page not Found... <span role="img">x</span></h2>
    </div>
  )};


function App() {
  return (
    <div className="App">
      <h1> Streaming HD</h1>
      <Router>
        <Switch>
        {/* la premiere route ne doit pas voir de Npoint */}
        <Route exact path="/" component={Home}/>
        <Route exact path="/Movies" component={Movies}/>
        <Route exact path="/Series" component={Series}/>
        <Route exact component = {pageNotFound}/>
        </Switch>
   </Router>
    </div>
  );
}

export default App;
