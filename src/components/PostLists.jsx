import Post from "./Post.jsx";
import classes from "./PostLists.module.css";
import NewPost from "./NewPost.jsx";

function PostLists() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="John" body="Hello, world!" />
        <Post author="Jane" body="Hi, there!" />
        <Post author="alirr " body="react great" />
        <Post author="naya" body="So smart girl" />
      </ul>
    </>
  );
}

export default PostLists;
