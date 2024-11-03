import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase.config';
import { collection, getDocs, addDoc} from 'firebase/firestore';

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
       const querySnapshot = await getDocs(collection(db,'comments'));
       const comments = [];
       querySnapshot.forEach((doc) => {
        comments.push(doc.data());
       });
       return comments;
    }
);

export const postComment = createAsyncThunk(
    'comments/postComment',
    async (payload, { getState }) => {
        // Add the comment to Firestore
        const docRef = await addDoc(collection(db, 'comments'), {
            ...payload,
            date: new Date().toISOString() // Set the current date
        });

        // Get the state and add Firestore's ID to the new comment
        const newComment = {
            ...payload,
            id: docRef.id, // Use Firestore-generated ID
            date: new Date().toISOString() // Ensure the date is consistent
        };

        // Return the new comment to be added to the state
        return newComment;
    }
);


const initialState = {
    commentsArray: [],
    isLoading: true,
    errMsg: ''
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            const newComment = {
                id: state.commentsArray.length + 1,
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
            state.commentsArray = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [postComment.rejected]: (state, action) => {
            alert(
                'Your comment could not be posted\nError: ' +
                    (action.error ? action.error.message : 'Fetch failed')
            );
        }
    }
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByProjectId = (projectId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.projectId === parseInt(projectId)
    );
};
