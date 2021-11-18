import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from './services/api';
import { checkAuthAction, fetchFilmsAction, fetchPromoFilmAction } from './store/api-actions';
import { requireAuthorization } from './store/action';
import { AuthorizationStatus } from './const';
import { rootReducer } from './store/root-reducer';
import { BrowserRouter } from 'react-router-dom';

export const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
