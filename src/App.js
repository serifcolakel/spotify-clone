import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import PremiumContent from "components/PremiumContent";
import Footer from "components/Footer";
import Campaigns from "components/Campaigns";
import DownloadContent from "components/DownloadContent";
import SupportContent from "components/SupportContent";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/indir" component={DownloadContent} />
          <Route path="/destek" component={SupportContent} />
          <Route path="/premium" component={PremiumContent} />
          <Route exact path="/" component={Campaigns} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
