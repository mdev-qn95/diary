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
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Header from './routes/Header'
import LoadingComponent from './components/LoadingComponent'
import AuthenticatedComponent from './components/AuthenticatedComponent'
import NoteDetail from './components/NoteDetail';
import NoteEdit from './components/NoteEdit';

// create redux store -> reducers -> 'actions - actionType' | applyMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// provide the store to react

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <LoadingComponent>
          <div>
            <Switch>
              <Route path="/login" component={Login} exact={true} />
              <Redirect from="/logout" to="/" />
              <AuthenticatedComponent>
                <Header />
                <Route path="/:id" component={NoteDetail} exact={true} />
                <Route path="/:id/edit" component={NoteEdit} exact={true} />
                <Route path="/" component={App} exact={true} />
              </AuthenticatedComponent>
            </Switch>
          </div>
        </LoadingComponent>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
