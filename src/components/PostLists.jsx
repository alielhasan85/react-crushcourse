import Post from "./Post.jsx";
import classes from "./PostLists.module.css";
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
import { useState } from "react";

function PostLists({ isposting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function AddPostHandler(PostData) {
    // onAddPost(newPost);
    fetch("https://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [PostData, ...existingPosts]);
  }

  let ModalContent;
  if (isposting) {
    ModalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} onAddPost={AddPostHandler} />
      </Modal>
    );
  }
  return (
    <>
      {ModalContent}
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.text} author={post.author} text={post.text} />
        ))}
      </ul>
    </>
  );
}

export default PostLists;
