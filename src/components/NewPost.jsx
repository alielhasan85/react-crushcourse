import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCancel, onAddPost }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  function bodyChangeHandler(event) {
    setText(event.target.value);
  }

  function authorChangeHandler(event) {
    setAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const newPost = {
      author: author,
      text: text,
    };

    console.log(newPost);
    onCancel();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>

      <p className={classes.actions}>
        <button>Submit</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </p>
    </form>
  );
}

export default NewPost;
