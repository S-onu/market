import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import LeftFooterComponent from "./Components/LeftFooterComponent";
import ContentHeader from "./Components/ContentHeader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditProducts from "./Components/EditProducts";
import ContactUsPage from "./Components/ContactUsPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/contactUs">
            <ContactUsPage />
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
                <Route path="/">
                  <ContentHeader />
                  <Content />
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
