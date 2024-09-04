import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import oompaDetailReducer from './oompaDetailSlice';
import oompaListReducer from './oompaListSlice';

export const rootReducer = combineReducers({
  oompaList: oompaListReducer,
  oompaDetail: oompaDetailReducer
})

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem('__oompas__state__', JSON.stringify(store.getState()));
}

export function setupStore(preloadedState?: Partial<RootState>) {
  const persistedState = localStorage.getItem('__oompas__state__');
  const initialState = persistedState ? JSON.parse(persistedState) : preloadedState;
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceLocalStorageMiddleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];