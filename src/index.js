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
  <nav class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <Link className="navbar-brand" to="/">DIARY</Link>
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
