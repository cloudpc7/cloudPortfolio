import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/baseUrl';
import { db } from '../../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';

const initialState = {
    commentsArray: [],
    isLoading: true,
    errMsg: ''
}

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
    const querySnapshot = await getDocs(collection(db,'comments'));
        const comments = [];
        querySnapshot.forEach((doc) => {
            comments.push(doc.data());
        })

})

export const postComment = createAsyncThunk('comments/postComments', async(comment, { dispatch }) => {
    const response = await fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {'Content-Type': 'application/json'}
    })

    if(!response.ok) {
        return Promise.reject(`Unable to fetch, status: ${response.status}`);
    }

    const data = await response.json();
    return data;
    
})

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
       addComment: (state, action) => {
        console.log('addComment action.payload', action.payload);
        console.log('addComment stat.commentsArray', state.commentsArray);
        const newComment = {
            id: state.commentsArray.length +1,
            ...action.payload
        };
        state.commentsArray.push(newComment);
       }
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.commentsArray = action.payload
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Failed to fetch';
        },
        [postComment.rejected]: (state,action) => {
            alert(
                `Your comment could not be posted\nError: ${(action.error ? action.error.message: 'Fetch failed')}`
            )
        }
    }

})

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByProjectId = (projectId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.projectId === parseInt(projectId)
    );
};