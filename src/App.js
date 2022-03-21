import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="leftFooter mx-1 bg-dark my-3"></div>
        <div className="my-3">
          <h1 className="text-center">Laptop - buying guide</h1>
          <div className="badges">
          <span class="badge mx-1 bg-secondary">Apple</span>
          <span class="badge mx-1 bg-secondary">HP</span>
          <span class="badge mx-1 bg-secondary">Lenovo</span>
          <span class="badge mx-1 bg-secondary">Dell</span>
          <span class="badge mx-1 bg-secondary">Acer</span>
          <span class="badge mx-1 bg-secondary">Asus</span>
          <span class="badge mx-1 bg-secondary">MSI</span>
          </div>
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
