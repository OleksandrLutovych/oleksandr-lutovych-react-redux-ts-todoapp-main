import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUsersState } from "../types/redux.types";
import { IUser } from "../types/usersTypes";
import { RootState } from "./store";

const initialState: IUsersState = {
  users: [],
  error: null,
};


export const fetchUsers = createAsyncThunk<IUser[], undefined, {rejectValue: string}>(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      return data;
    } catch (error: any) {
      console.log(rejectWithValue(error))
      return rejectWithValue('Server error!')
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const usersState = (state: RootState) => state.users;
export default usersSlice.reducer;
