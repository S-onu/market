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
  inputEditProductObj[0] = [
    [
      "1",
      "MACBOOK AIR",
      "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/913iRx-3W-L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61ChHwbxObL._SX679_.jpg",
      "84,990.00",
      "33.74 cm / 13.3-inch (diagonal)",
      "Apple M1 chip, 8-core CPU",
      "Up to 15 hours wireless web, 30W USB-C Power Adapter",
      "8GB unified memory Configurable to: 16GB",
      "256GB SSD Configurable to:512GB, 1TB or 2TB",
      "720p FaceTime HD camera",
    ],
    [
      "2",
      "MACBOOK PRO (16-INCH)",
      "https://m.media-amazon.com/images/I/61Y30DpqRVL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/716QjdQOR+L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81fM4olBVWL._SX679_.jpg",
      "2,39,900.00",
      "41.05 cm, 16.2” Liquid Retina XDR display",
      "Apple M1 Max chip, Up to 32-core GPU",
      "Up to 21 hours battery life",
      "Up to 64GB unified memory",
      "8TB Maximum configurable storage",
      "1080p FaceTime HD camera",
    ],
    [
      "3",
      "MACBOOK PRO (14-INCH)",
      "https://m.media-amazon.com/images/I/61vFO3R5UNL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/818mB1ifjfL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61pZ0aEo7vL._SX679_.jpg",
      "1,79,990.00",
      "35.97, (14.2”) Liquid Retina XDR display",
      "Apple M1 Pro chip, Up to 10-core CPU",
      "Up to 21 hours battery life",
      "Up to 64GB unified memory",
      "8TB Maximum configurable storage",
      "1080p FaceTime HD camera",
    ],
    [
      "4",
      "HP SPECTRE X360 14",
      "https://m.media-amazon.com/images/I/81L+m0cYQgL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71mogoCPrGL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71YzA2eXKpL._SX679_.jpg",
      "1,50,499.00",
      "34.3 cm (13.5”)",
      "Intel® Core™ i7 processor",
      "Up to 17 hours battery life",
      "16 GB LPDDR4-3200 SDRAM (onboard)",
      "1 TB PCIe® NVMe™ TLC M.2 SSD",
      "HP True Vision 720p HD IR camera",
    ],
    [
      "5",
      "ASUS ROG ZEPHYRUS G15",
      "https://m.media-amazon.com/images/I/41JNxUy8EYL.jpg",
      "https://m.media-amazon.com/images/I/41n2mFUVCQL.jpg",
      "https://m.media-amazon.com/images/I/31hqtNBnoQL.jpg",
      "1,48,400.00",
      "15.6-inch",
      "AMD Ryzen™ 9 5900HS Mobile ",
      "90WHrs, 4S1P, 4-cell Li-ion",
      "16GB DDR4 on board, Max Capacity : 48GB",
      "1TB M.2 NVMe™ PCIe® 3.0 SSD",
      "FHD 1080P@60FPS external camera",
    ],
    [
      "6",
      "ASUS CHROMEBOOK FLIP CX5",
      "https://m.media-amazon.com/images/I/81IcfbM+H-L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71P3MWOOWzL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81Q2jmCD0mL._SX679_.jpg",
      "1,31,636.00",
      "15.6'' FHD NanoEdge display.",
      "Up to 11th Intel® Core™ i7 processor.",
      "11 hours battery life.",
      "Up to 16 GB memory.",
      "Up to 512 GB SSD storage.",
      "-",
    ],
    [
      "7",
      "LG GRAM 17",
      "https://m.media-amazon.com/images/I/61WOfbIkf7L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/611hiaRJfyL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61+Z10+l0WL._SX679_.jpg",
      "1,10,999.00",
      "17” (43.2 cm) WQXGA",
      "Intel 11th Gen Core i7-1165G7",
      "80 Wh Battery with 15 hr back-up",
      "16 GB LPDDR4X",
      "512 GB SSD",
      "-",
    ],
    [
      "8",
      "HP ENVY X360 13",
      "https://m.media-amazon.com/images/I/41gHmCPXSjS.jpg",
      "https://m.media-amazon.com/images/I/81+S3myQJ+L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81IHoBt7gZL._SX679_.jpg",
      "81,990.00",
      "33.8 cm (13.3”) diagonal",
      "AMD Ryzen 5 5600U",
      "3 Cell ,51 Wh Li-ion polymer Supports Fast Charge,65 Watt Smart PFC Adapter",
      "16 GB DDR4-3200 MHz RAM (onboard)",
      "SSD 512GB",
      "HP Wide Vision 720p HD camera",
    ],
    [
      "9",
      "DELL XPS 13 2-IN-1",
      "https://m.media-amazon.com/images/I/61OBvwVHtQL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71mOwwF+UiL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61qUJTBmqWL._SX679_.jpg",
      "1,09,500.00",
      "13.3 inches",
      "10th Generation Intel Core i5-1035G1",
      "12 hours 15 minutes battery life",
      "8GB RAM",
      "512GB SSD",
      "-",
    ],
    [
      "10",
      "LENOVO THINKPAD X1 NANO",
      "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-nano-13-gallery.png?context=bWFzdGVyfHJvb3R8NTAyMzQ4fGltYWdlL3BuZ3xoMjMvaDUzLzE0MDgwNDg1MDY0NzM0LnBuZ3xiNjRkYmZmYjM0OTE2ZmVmMmQ2NTJiZmJhMThlMDFiZGIzYmE5YzgzMjU1ZTMxOTAwNzQ3ZGUzY2E3MzQyYWYy",
      "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MjU2NTM5fGltYWdlL3BuZ3xoMGUvaDRiLzExMDk5ODQ3MDk4Mzk4LnBuZ3w5NGIyNzE3N2NkMTg5MmRhOTA0NzUxMjY5NmQ3YzE3OTY3NjQ3OGE0M2JmNjg3ODRmNzdkNWJlYWMwOWQ1ZDBk",
      "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MjM2MjI5fGltYWdlL3BuZ3xoMzMvaDljLzExMDk5ODQ3MjI5NDcwLnBuZ3xiNWNkNjgxZTYyNzRjMWFjZDcxNWQ0YjljMjkxMGQzNGQzMGFiZDU4NDM4ZTdkYmQ1ODg1YTNjZTY5MTcwYmMy",
      "147,537.00",
      "33.7cms (13) 2K Touchscreen (2160 x 1350) with Dolby Vision™",
      "Up to 11th Gen Intel® Core™ i7 vPro®",
      "Up to 13 hours* 48Wh (MM18)",
      "Up to 16GB LPDDR4x",
      "Up to 1TB PCIe SSD",
      "Hybrid infrared (IR) / 720p HD with webcam privacy cover",
    ],
  ];
  localStorage.setItem("inputValues", JSON.stringify(inputEditProductObj));

  const [showResults, setShowResults] = useState(inputEditProductObj[0]);
  const handleOnCardClick1 = () => {
    setShowResults(inputEditProductObj[0]);
  };

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
            <HomePage goToProductSite={handleOnCardClick1} />
            <hr className="my-5" />
            <Footer />
          </Route>
          <Route path="/compare">
            <ComparingProducts state={myArr2} />
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
