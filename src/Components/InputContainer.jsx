import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeContent,
  changeName,
  changeUserName,
} from "../Store/Slice/DataSlice";

const InputContainer = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={"InputContainer"}>
      <form autoComplete="false">
        <div className="row">
          <label htmlFor="FullName">Full Name</label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            id="FullName"
            value={name}
            onChange={(e) => {
              dispatch(changeName(e.target.value));
              setName(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <label htmlFor="UserName">User Name </label>
          <input
            type="text"
            placeholder="Enter Your UserName"
            id="UserName"
            value={userName}
            onChange={(e) => {
              dispatch(changeUserName(e.target.value));
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <label htmlFor="Content">Text Content</label>
          <textarea
            id="Content"
            cols="30"
            rows="10"
            placeholder="Enter Your Content"
            value={message}
            onChange={(e) => {
              dispatch(changeContent(e.target.value));
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default InputContainer;
