import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mapImageURL } from '../../utils/mapImageURL';
import { db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';

export const fetchSkills = createAsyncThunk('skills/fetchSkills', async () => {
    const querySnapshot = await getDocs(collection(db, 'skills'));
    const skills = [];
    querySnapshot.forEach((doc) => {
        skills.push(doc.data());
    });
    console.log(skills);
    return skills;
});

const initialState = {
    skillsArray: [],
    isLoading: true,
    errMsg: ''
};

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSkills.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSkills.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMsg = '';
                state.skillsArray = mapImageURL(action.payload);
            })
            .addCase(fetchSkills.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Fetch failed';
            });
    }
});

export const skillsReducer = skillsSlice.reducer;

export const selectAllSkills = (state) => {
    return state.skills.skillsArray;
};
