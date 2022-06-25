import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import educational from "./Components/educational/educational";

import experience from "./Components/experience/experience";

import extras from "./Components/extras/extras";

import personal from "./Components/personal/personal";

import projects from "./Components/projects/projects";

const Routing = (
  <Router>
    <div>
      <Link to="/">Page1</Link>
    </div>
    <div>
      <Link to="/page2">Page2</Link>
    </div>
    <div>
      <Link to="/page3">Page3</Link>
    </div>
    <div>
      <Link to="/page4">Page4</Link>
    </div>
    <div>
      <Link to="/page5">Page5</Link>
    </div>

    <div>
      <Route exact path="/" component={personal}></Route>
      <Route path="/page2" component={educational}></Route>
      <Route path="/page3" component={projects}></Route>
      <Route path="/page4" component={experience}></Route>
      <Route path="/page5" component={extras}></Route>
    </div>
  </Router>
);
export default Routing;
