import PostLists from "./components/PostLists";
import Mainheader from "./components/Mainheader";
import { useState } from "react";
function App() {
  const [isposting, setHideModal] = useState(false);

  function showModalHandler() {
    setHideModal(true);
  }

  function hideModalHandler() {
    setHideModal(false);
  }

  return (
    <>
      <Mainheader onCreatePost={showModalHandler} />
      <main>
        <PostLists isposting={isposting} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
