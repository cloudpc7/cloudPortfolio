import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase.config';
import { collection, addDoc } from 'firebase/firestore';

export const createProject = createAsyncThunk(
    'projects/createProject',
    async (payload) => {
        const docRef = await addDoc(collection(db,'newProject'), {
            ...payload,
            date: new Date().toISOString()
        })

        const newProject = {
            ...payload,
            id: docRef.id,
            date: new Date().toISOString()
        };
        return newProject;
    }
)

const initialState = {
    projectsArray: [],
    isLoading: true,
    errMsg: ''
}


const createProjectsSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        addProject: (state, action) => {
            const newProject = {
                id: state.projectsArray.length + 1,
                ...action.payload
            };
            state.projectsArray.push(newProject);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(createProject.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createProject.fulfilled, (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
        })
        .addCase(createProject.rejected, (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Failed to create project. ';
        });
    }
});

export const createProjectsReducer = createProjectsSlice.reducer;
export const { addProject } = createProjectsSlice.actions;