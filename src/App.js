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
  let inputValues = localStorage.getItem("inputValues");
  let inputEditProductObj;
  if (inputValues == null) {
    inputEditProductObj = [];
  } else {
    inputEditProductObj = JSON.parse(inputValues);
  }
  inputEditProductObj[0] = Source.articles0;
  inputEditProductObj[1] = Source.articles1;
  inputEditProductObj[2] = Source.articles2;
  inputEditProductObj[3] = Source.articles3_gamingLaptop;
  inputEditProductObj[4] = Source.articles4_editingLaptop;
  inputEditProductObj[5] = Source.articles5_gamingMobile;
  localStorage.setItem("inputValues", JSON.stringify(inputEditProductObj));

  const [showResults, setShowResults] = useState(0);

  let myArr = [0, 1];
  let myArr2 = [0, 0];
  const compareTwoProducts = () => {
    let elements = document.querySelectorAll(".readMoreBtn");
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", () => {
        let elem = document.querySelector(".compareBTN");
        elem.addEventListener("click", () => {
          let num = i;
          myArr = [num];
        });
      });
    }
  };
  const runFunc3 = () => {
    setTimeout(() => {
      myArr2.push(myArr[0]);
    }, 600);
  };

  return (
    <>
      <Router>
        <Navbar />
        {/* <Alerts alert={alert}/> */}
        <Switch>
          <Route exact path="/contactUs">
            <ContactUsPage />
          </Route>
          <Route exact path="/market">
            <HomePage goToProductSite={setShowResults} />
            <hr className="my-5" />
            <Footer />
          </Route>
          <Route exact path="/compare">
            <ComparingProducts state2={showResults} state={myArr2} />
          </Route>
          <Route exact path="/edit">
            <EditProducts />
          </Route>
          <div className="content">
            <div className="leftFooter p-1">
              <LeftFooterComponent
                state2={myArr2}
                goToProductSite={setShowResults}
                showResults2={showResults}
              />
            </div>
            <div className="my-3">
              <Switch>
                <Route exact path="/productsite">
                  <ContentHeader goToProductSite={setShowResults} />
                  <Content
                    runFunc3={runFunc3}
                    state={showResults}
                    runFunc={compareTwoProducts}
                  />
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
