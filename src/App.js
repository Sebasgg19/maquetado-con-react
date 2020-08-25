import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Login from '../src/pages/login/login.js';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/'>
           <Login />
         </Route>
       </Switch>
       <Route path='/playlist/:uuid'>

       </Route>
     </Router>
    </div>
  );
}

export default App;
