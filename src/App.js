//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Cart from "./components/cart/Cart";

const App = () => {
  
  const pageSize = 9;
  const api = process.env.REACT_APP_NEWS_API;
  const country = "in";

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar color="#2baae2" height={3} progress={progress} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <News
                setprogress={setProgress}
                key="general"
                pagesize={pageSize}
                country={country}
                api={api}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setprogress={setProgress}
                key="business"
                pagesize={pageSize}
                country={country}
                api={api}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setprogress={setProgress}
                key="entertainment"
                pagesize={pageSize}
                country={country}
                api={api}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setprogress={setProgress}
                key="health"
                pagesize={pageSize}
                country={country}
                api={api}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setprogress={setProgress}
                key="science"
                pagesize={pageSize}
                country={country}
                api={api}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setprogress={setProgress}
                key="sports"
                pagesize={pageSize}
                country={country}
                api={api}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setprogress={setProgress}
                key="technology"
                pagesize={pageSize}
                country={country}
                api={api}
                category="technology"
              />
            }
          />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
