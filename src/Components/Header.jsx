import { Link } from "react-router-dom";
import Container from "./Container";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header-container">
          <h1 className="logo">
            Edit<span>Z</span>
          </h1>
          <Link to={"https://sm8uti-linktree.netlify.app"}>Sm8uti</Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
