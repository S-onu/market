import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import LeftFooterComponent from "./Components/LeftFooterComponent";
import ContentHeader from "./Components/ContentHeader";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="leftFooter mx-1 bg-dark my-3">
          <LeftFooterComponent/>
        </div>
        <div className="my-3">
          <ContentHeader/>
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
