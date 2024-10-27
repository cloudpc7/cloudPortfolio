import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/baseUrl';

export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async () => {
        const response = await fetch(baseUrl + 'projects');
        if(!response.ok) {
            return Promise.reject(`Unable to fetch, status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    }   
)

const initialState = {
    projectsArray : [],
    isLoading: true,
    errMsg:''
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
})

export const projectsReducer = projectsSlice.reducer;

export const selectAllProjects = (state) => {
    return state.projects.projectsArray;
}

export const selectProjectsById = (id) => (state) => {
    return state.projects.projectsArray.find(
        (project) => project.id === parseInt(id)
    )
}