import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { projectsReducer } from '../features/projects/projectsSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    projects: projectsReducer,
  },
});
