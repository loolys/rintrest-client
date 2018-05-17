import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import AllPinsContainer from "./Containers/AllPinsContainer";
import RegisterContainer from "./Containers/RegisterContainer";

export default () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Route path="/" exact component={AllPinsContainer} />
      <Route path="/register" exact component={RegisterContainer} />
    </div>
  </BrowserRouter>
);
