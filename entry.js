var React = require('react')
var ReactDOM = require('react-dom')
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Include your React components like this:
import App from './components/app'
import MainPage from './components/main-page'
import Registration from './components/registration'

// import MyComponent from 'components/my_component'
require("./style.scss")

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage}/>
      <Route path="registration" component={Registration}/>
    </Route>
  </Router>
), document.getElementById("placeholder"))