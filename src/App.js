import "./App.css";
import { useMemo, useState } from "react";
import TableList from "./components/TableList";

import PostForm from "./components/PostForm";
import Filter from "./components/Filter";
import MyModal from "./components/UI/module/MyModal";
import MtButton from "./components/UI/btn/MtButton";
import { useCreatePost } from "./hook/useCreatePost";

function App() {
  const [post, setPost] = useState([
    {
      id: 1,
      title: "JavaScript",
      stack: "MERN Stack",
    },
    {
      id: 2,
      title: "Python",
      stack: "Full Stack",
    },
    {
      id: 3,
      title: "Java",
      stack: "Data",
    },
    {
      id: 4,
      title: "C",
      stack: "Back end",
    },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal,setModal] = useState(false);
  const sortedandsearch = useCreatePost(filter.sort,filter.query,post)

  const addPost = (newPost) => {
    setPost([...post, newPost]);
    setModal(false)
  };
  const remove = (id) => {
    setPost(post.filter((s) => s.id !== id));
  };

 
  

  return (
    <div className="app w-50 mx-auto my-5">
      <MtButton className="btn btn-primary " onClick={() =>setModal(true)}>Add Post</MtButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm onAddPost={addPost} />
      </MyModal>
      <Filter filter={filter} setFilter={setFilter} />
      {sortedandsearch.length > 0 ? (
        <TableList post={sortedandsearch} remove={remove} />
      ) : (
        <h5 className="text-center my-3">Ther is no Post</h5>
      )}
    </div>
  );
}

export default App;
