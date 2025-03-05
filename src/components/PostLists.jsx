import Post from "./Post.jsx";
import clasees from "./PostLists.module.css";

function PostLists() {
  return (
    <ul className={clasees.posts}>
      <Post author="John" body="Hello, world!" />
      <Post author="Jane" body="Hi, there!" />
      <Post author="alirr " body="react great" />
      <Post author="naya" body="So smart girl" />
    </ul>
  );
}

export default PostLists;
