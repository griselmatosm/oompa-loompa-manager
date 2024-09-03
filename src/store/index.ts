import { combineReducers, configureStore } from '@reduxjs/toolkit';
import oompaListReducer from './oompaList/slice';

export const rootReducer = combineReducers({
  oompaList: oompaListReducer
})

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];