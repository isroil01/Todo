import React,{useState} from "react";
import MtButton from "./UI/btn/MtButton";
import MyInput from './UI/input/MyInput';

const PostForm = (props) => {
    const [title, setTitle] = useState("");
    const [stack, setStack] = useState("");

    const addPost = (e) => {
        e.preventDefault();
    
        const newPost = {
          id: Date.now().toString(),
          title,
          stack
        }
        props.onAddPost(newPost)
        setStack('')
        setTitle('')
      };
  return (
    <form onSubmit={addPost}>
      <h4 className="text-center">Create your post</h4>
      <MyInput
        type="text"
        className="form-control "
        placeholder="Programming Language"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <MyInput
        type="text"
        className="form-control my-3"
        placeholder="Enter your stack"
        value={stack}
        onChange={(e) => setStack(e.target.value)}
      />
      <MtButton className='btn btn-primary w-100'>Add Post</MtButton>
    </form>
  );
};

export default PostForm;
