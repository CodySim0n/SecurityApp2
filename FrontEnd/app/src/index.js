import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LiveHosts from './liveHostComponent'
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



class Rut extends Component {
  render() {
    return (
      <Router>
          <div>
              <Switch>
            <Route path={'/'} exact={true}component={App}>
            </Route>
</Switch>
             <Switch>
            <Route path={'/other'} exact={true} component={LiveHosts}>

            </Route>
            </Switch>
            </div>


        </Router>
    );
  }
}




        
     
ReactDOM.render(<Rut />, document.getElementById('root'));
registerServiceWorker();
