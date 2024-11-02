import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mapImageURL } from '../../utils/mapImageURL';
import { db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';

export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async () => {
        const querySnapshot = await getDocs(collection(db,'projects'));
        const projects = [];
        querySnapshot.forEach((doc) => {
            projects.push(doc.data());
        });
        return projects;
    }
)

const initialState = {
    projectsArray : [],
    isLoading: true,
    errMsg: ''
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers : {
        [fetchProjects.pending] : (state) => {
            state.isLoading = true;
        },
        [fetchProjects.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.projectsArray = mapImageURL(action.payload);
        },
        [fetchProjects.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});



export const projectsReducer = projectsSlice.reducer;

export const selectAllProjects = (state) => {
    return state.projects.projectsArray;
};

export const selectProjectById = (id) => (state) => {
    return state.projects.projectsArray.find(
        (project) => project.id === parseInt(id)
    )
}

export const selectFeaturedProject = (state) => {
    return {
        featuredItem: state.projects.projectsArray.find(
            (project) => project.featured
        ), 
        isLoading: state.projects.errMsg
    }
}