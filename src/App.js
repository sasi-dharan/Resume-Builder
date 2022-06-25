import React from "react";
import Profile from "./components/Profile";
import Education from "./components/Education";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Extras from "./components/Extras";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <link to="/"></link>
        </div>
        <Route path="/" component={Profile} exact />
        <Route path="/profile" component={Profile} />
        <Route path="/education" component={Education} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
        <Route path="/extras" component={Extras} />
      </BrowserRouter>
    </div>
  );
}

export default App;
