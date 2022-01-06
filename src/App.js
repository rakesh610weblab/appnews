//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 9;
  api = 'efa74fb093b94b6091ce0a44e7bff29a';
  country = 'in';

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            color='#2baae2'
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <News
                  setprogress={this.setProgress}
                  key="general"
                  pagesize={this.pageSize}
                  country={this.country}
                  api={this.api}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setprogress={this.setProgress}
                  key="business"
                  pagesize={this.pageSize}
                  country={this.country}
                  api={this.api}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setprogress={this.setProgress}
                  key="entertainment"
                  pagesize={this.pageSize}
                  country={this.country}
                  api={this.api}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setprogress={this.setProgress}
                  key="health"
                  pagesize={this.pageSize}
                  country={this.country}
                  api={this.api}
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setprogress={this.setProgress}
                  key="science"
                  pagesize={this.pageSize}
                  country={this.country}
                  api={this.api}
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setprogress={this.setProgress}
                  key="sports"
                  pagesize={this.pageSize}
                  country={this.country}
                  api={this.api}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setprogress={this.setProgress}
                  key="technology"
                  pagesize={this.pageSize}
                  country={this.country}
                  api={this.api}
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
