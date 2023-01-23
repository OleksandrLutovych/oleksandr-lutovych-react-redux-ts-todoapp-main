import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import todoReducer from "./TodoReducer";
import postsReducer from './PostsReducer'
import UsersReducer from "./UsersReducer";

export const store = configureStore(
  {
    reducer: {
      todo: todoReducer,
      posts: postsReducer,
      users: UsersReducer,
    },
  }
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
