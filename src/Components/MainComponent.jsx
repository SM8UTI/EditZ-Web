import React from "react";
import { useSelector } from "react-redux";

const MainComponent = () => {
  const data = useSelector((state) => state.data.dataLists);
  console.log(data);
  return (
    <div className="MainComponent">
      <div className="card">
        <div className="profile">
          <div className="img">
            <img
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Profile Image"
            />
          </div>
          <div className="text">
            <h3>{data.name === undefined ? "Full Name" : data.name}</h3>
            <span>
              @{data.userName === undefined ? "userName" : data.userName}
            </span>
          </div>
        </div>
        <div className="body">
          <p>
            {data.content === undefined
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse placeat culpa atque nesciunt adipisci quas qui tenetur rem accusantium aut beatae, commodi fugiat facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sint harum fugiat aut eum quisquam perspiciatis, labore fuga similique tempora enim voluptas cum iusto maxime!"
              : data.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
