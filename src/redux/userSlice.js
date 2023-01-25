import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = response.data;
  users.forEach((user) => {
    user.avatar = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;
  });
  return users;
});


const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
        },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;

    });
  },
});

const persistConfig = {
  key: "users",
  storage,
  blacklist: ["error"],
  timeout: 60 * 60 * 1000,
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);
export const { actions, reducer } = userSlice;
export default persistedReducer;