import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ITodoState } from "../types/redux.types";

export const initialState: ITodoState = {
  todo: [],
};

export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<any>) => {
      state.todo.push({
        userId: 1,
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload.id);
    },
    editTodoState: (state, action) => {
      const [newText, todoItem] = action.payload;
      const [newTodoArr] = state.todo.filter((item) => item.id == todoItem.id);

      newTodoArr.title = newText;
    },
    completedTodo: (state, action) => {
      const [editTodo] = state.todo.filter(
        (item) => item.id === action.payload.id
      );
      editTodo.completed = !editTodo.completed;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todo = action.payload;
    });
  },
});

export const { addTodo, removeTodo, editTodoState, completedTodo } =
  todoSlice.actions;
export const selectCount = (state: RootState) => state.todo;
export default todoSlice.reducer;
