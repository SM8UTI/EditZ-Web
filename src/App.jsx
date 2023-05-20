import React from "react";
import Header from "./Components/Header";
import InputContainer from "./Components/InputContainer";
import Container from "./Components/Container";
import MainComponent from "./Components/MainComponent";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <InputContainer />
          <MainComponent />
        </div>
      </Container>
    </>
  );
};

export default App;
