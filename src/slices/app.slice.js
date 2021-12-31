import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


const loginAuth = createAsyncThunk(
    "app/login",
    (form) => {

    }
);

const initialState = {
    checked: false,
    loggedIn: false,
    me: {},
    assets: {
        AuthBg: {uri: "https://wallpaperaccess.com/full/833312.png"}

    }
};
// ------------------------------------
// Slice
// ------------------------------------
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        authenticate: (state, {payload}) => {
            state.loggedIn = payload.loggedIn;
            state.checked = payload.checked
        },
        saveMe: (state, {payload}) => {
            state.me = payload.me
        },
        assets: {}
    },
})

export const {authenticate, saveMe, assets} = appSlice.actions;
export const selectAssets = state => state.app.assets;

export default appSlice.reducer
