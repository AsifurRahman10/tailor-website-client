import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import auth from '../../firebase/firebase.init'

const googleProvider = new GoogleAuthProvider();

// async actions

// google login
export const googleLogin = createAsyncThunk('auth/googleLogin', async () => {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
})

// email login
export const emailLogin = createAsyncThunk('auth/emailLogin', async ({ email, password }) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
})

// email register
export const emailRegister = createAsyncThunk('auth/emailRegister', async ({ email, password }) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
})


// update user
export const updateUserProfile = createAsyncThunk('auth/updateUserProfile', async ({ name, image }) => {
    if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }
    return { displayName: name, photoURL: image };
})

export const logOut = createAsyncThunk('auth/signOut', async () => {
    await signOut(auth);
})



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: true,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(googleLogin.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(emailLogin.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(emailRegister.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.user = { ...state.user, ...action.payload }
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = null;
            })
    }
})

export const { setUser, setLoading } = authSlice.actions;
export default authSlice.reducer;

export const observe = () => (dispatch) => {
    dispatch(setLoading(true));

    try {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser && currentUser?.photoURL) {
                dispatch(setUser(currentUser));
            } else {
                dispatch(setUser(null));
            }
            dispatch(setLoading(false));
        });

        return unsubscribe;
    } catch (error) {
        console.error("Error observing auth state:", error);
        dispatch(setLoading(false)); // Ensure loading is set to false on error
    }
}
