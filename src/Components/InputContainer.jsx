import React from "react";

const InputContainer = () => {
  return (
    <div className={"InputContainer"}>
      <form>
        <div className="row">
          <label htmlFor="FullName">Full Name</label>
          <input type="text" placeholder="Enter Your Full Name" id="FullName" />
        </div>
        <div className="row">
          <label htmlFor="UserName">User Name </label>
          <input type="text" placeholder="Enter Your UserName" id="UserName" />
        </div>
        <div className="row">
          <label htmlFor="Content">Text Content</label>
          <textarea
            id="Content"
            cols="30"
            rows="10"
            placeholder="Enter Your Content"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default InputContainer;
