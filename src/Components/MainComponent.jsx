import React, { useRef } from "react";
import { useSelector } from "react-redux";
// import exportAsImage from "./exportAsImage";
import * as htmlToImage from "html-to-image";

const MainComponent = () => {
  const data = useSelector((state) => state.data.dataLists);
  console.log(data);

  const component = useRef(null);

  const exportAsImage = async (el, name) => {
    const dataUrl = await htmlToImage.toPng(el);
    const link = document.createElement("a");
    link.download = `${name}.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      className="MainComponent"
    >
      <div className="MainComponent-container" ref={component}>
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
            <pre>
              {data.content === undefined
                ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse placeat culpa atque nesciunt adipisci quas qui tenetur rem accusantium aut beatae, commodi fugiat facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sint harum fugiat aut eum quisquam perspiciatis, labore fuga similique tempora enim voluptas cum iusto maxime!"
                : data.content}
            </pre>
          </div>
        </div>
      </div>
      <button
        className="btn"
        onClick={() =>
          exportAsImage(component.current, `${data.userName}-Card`)
        }
      >
        Download
      </button>
    </div>
  );
};

export default MainComponent;
