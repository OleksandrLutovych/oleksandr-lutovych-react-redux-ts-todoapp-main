import Post from "../components/Post";
import { useEffect } from "react";
import { IPost } from "../types/postsType";
import { fetchPosts } from "../reducers/PostsReducer";
import { useAppDispatch, useAppSelector } from "../reducers/hook";

const PostsList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Posts List</h2>
      {posts.map((post: IPost) => (
        <Post posts={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsList;
