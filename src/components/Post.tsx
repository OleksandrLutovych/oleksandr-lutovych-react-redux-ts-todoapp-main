import { IPost } from "../types/postsType";
import classes from "./Posts.module.scss";

interface PostsProps {
  posts: IPost;
}

const Post = ({ posts }: PostsProps) => {
  return (
    <div className={classes.post_item}>
      <div className={classes.post_item_content}>
        <p className="">
          <b>Title: </b>
          {posts.title}
        </p>
        <p className="">{posts.body}</p>
      </div>
    </div>
  );
};

export default Post;
