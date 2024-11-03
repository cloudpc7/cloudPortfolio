import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mapImageURL } from '../../utils/mapImageURL';
import { baseUrl } from '../../app/baseUrl';

export const fetchSkills = createAsyncThunk('skills/fetchSkills', async () => {

    const response = await fetch(baseUrl + 'skills');

    if(!response.ok) {
        return Promise.reject(`Unable to fetch, status: ${response.status}`);
    }
    const data = await response.json();
    return data;

});

const initialState = {
    skillsArray: [],
    isLoading: true,
    errMsg: ''
}

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSkills.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchSkills.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.skillsArray = mapImageURL(action.payload);
        },
        [fetchSkills.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message: 'Fetch failed';
        }
    }
})

export const skillsReducer = skillsSlice.reducer;

export const selectAllSkills = (state) => {
   return state.skills.skillsArray
}