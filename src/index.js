import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Login from './components/Login'

// create redux store -> reducers -> 'actions - actionType' | applyMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const Header = () => (
  <nav className="navbar navbar-default" role="navigation">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to="/">DIARY</Link>
      </div>
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav navbar-right" >
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </div>
  </nav>
)
// provide the store to react


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/login" component={Login} exact={true} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
