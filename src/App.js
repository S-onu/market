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
import Source from "./Components/source.json";
import { useState } from "react";
import Alerts from "./Components/Alerts";

function App() {
  localStorage.clear();
  let laptop = [];
  let mobile = [];
  let inputValues = localStorage.getItem("inputValues");
  let inputEditProductObj;
  if (inputValues == null) {
    inputEditProductObj = [laptop, mobile];
  } else {
    inputEditProductObj = JSON.parse(inputValues);
  }
  inputEditProductObj[0] = Source.articles1
  inputEditProductObj[1] = Source.articles2
  localStorage.setItem("inputValues", JSON.stringify(inputEditProductObj));

  const [showResults, setShowResults] = useState(0);
  // const handleOnCardClick1 = () => {
    // setShowResults(inputEditProductObj[0]);
  // };

  let myArr = [0, 1];
  let myArr2 = [0,1];
  const compareTwoProducts = () => {
    let elements = document.querySelectorAll(".compareBTN");
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", () => {
        let num = i;
        myArr=[num];
      });
    }
    sort();
  };
  const sort = () => {
    if (myArr[myArr.length - 1] == myArr[myArr.length - 2]) {
      myArr.pop();
      sort();
    }
    myArr2.push(myArr[0])
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
            <HomePage goToProductSite={setShowResults} />
            <hr className="my-5" />
            <Footer />
          </Route>
          <Route path="/compare">
            <ComparingProducts state2={showResults} state={myArr2} />
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
                  <ContentHeader goToProductSite={setShowResults} />
                  <Content state={showResults} runFunc={compareTwoProducts} />
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
