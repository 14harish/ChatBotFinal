import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import chatBotReducer from './store/reducer/chatBotReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  chatBot: chatBotReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
