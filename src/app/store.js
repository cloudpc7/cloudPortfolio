import { configureStore } from '@reduxjs/toolkit';
import { projectsReducer } from '../features/projects/projectsSlice';
import { skillsReducer } from '../features/skills/skillsSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { createProjectsReducer } from '../features/createnewprojects/createProjectSlice';
export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    skills: skillsReducer,
    comments: commentsReducer,
    createProject: createProjectsReducer,
  },
});
