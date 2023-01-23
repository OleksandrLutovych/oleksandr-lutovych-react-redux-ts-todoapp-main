import { IPost } from "./postsType";
import { IUser } from "./usersTypes";

export type ITodoApi = {
  userId?: number,
  id: string;
  title: string;
  completed: boolean;
};
export interface ITodoState {
  todo: Array<ITodoApi>;
}

export interface IPostsState {
  posts: Array<IPost>;
}

export interface IUsersState {
  users: Array<IUser>;
  error: string | any
}
