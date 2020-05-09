import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'


import Main from './components/main/Main'
// import NoMatch from './components/Error/NoMatch'
// import ServicesPage from './components/Body/services/servicesPage/ServicesPage'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          {/* <Route exact path="/services" component={ServicesPage}/> */}
          {/* <Route component={NoMatch}/> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
