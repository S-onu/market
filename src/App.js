import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Content from "./Components/Content";
import LeftFooterComponent from "./Components/LeftFooterComponent";
import ContentHeader from "./Components/ContentHeader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditProducts from "./Components/EditProducts";
import ContactUsPage from "./Components/ContactUsPage";
import ComparingProducts from "./Components/ComparingProducts";
import Footer from "./Components/Footer";
import { useState } from "react";
import Alerts from "./Components/Alerts";

function App() {
  let inputValues = localStorage.getItem("inputValues");
  let inputEditProductObj;
  if (inputValues == null) {
    inputEditProductObj = [];
  } else {
    inputEditProductObj = JSON.parse(inputValues);
  }
  const [showResults, setShowResults] = useState(inputEditProductObj[0]);
  const handleOnCardClick1 = () => {
    setShowResults(inputEditProductObj[0]);
  };

  let myArr = [0, 0];
  const compareTwoProducts = () => {
    let elements = document.querySelectorAll(".compareBTN");
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", () => {
        let num = i;
        myArr.push(num);
      });
    }
    sort();
  };
  const sort = () => {
    if (myArr[myArr.length - 1] == myArr[myArr.length - 2]) {
      myArr.pop();
      sort();
    }
  };
  
  return (
    <>
      <Router>
        <Navbar />
        {/* <Alerts alert={alert}/> */}
        <Switch>
          <Route path="/contactUs">
            <ContactUsPage />
          </Route>
          <Route exact path="/">
            <HomePage goToProductSite={handleOnCardClick1} />
            <hr className="my-5" />
            <Footer />
          </Route>
          <Route path="/compare">
            <ComparingProducts state={myArr} />
          </Route>
          <div className="content">
            <div className="leftFooter mx-1 bg-dark my-3">
              <LeftFooterComponent />
            </div>
            <div className="my-3">
              <Switch>
                <Route path="/edit">
                  <EditProducts />
                </Route>
                <Route path="/productsite">
                  <ContentHeader />
                  <Content runFunc={compareTwoProducts} />
                  <hr className="my-5" />
                  <Footer />
                </Route>
              </Switch>
            </div>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
