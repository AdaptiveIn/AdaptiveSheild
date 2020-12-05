import React from 'react'
import Accountsummary from './Accountsummary'
import ShieldSetup from './ShieldSetup'
import ConfirmationScreen from './ConfirmationScreen'
import Success from './Success'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react'


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path = "/" component = {Accountsummary}/>
      <Route exact path = "/ShieldSetup" component = {ShieldSetup}/>
      <Route exact path = "/ConfirmationScreen" component = {ConfirmationScreen}/>
      <Route exact path = "/Success" component = {Success}/>
      </Switch>
    </Router>
  );
}

export default withAuthenticator(App)

