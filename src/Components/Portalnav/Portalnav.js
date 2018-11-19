import React, { Component } from "react";
import "./Portalnav.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Admin from "../Admin/Admin";
import Distributor from "../Distributor/Distributor";
import Recipient from "../Recipient/Recipient";

class Portalnav extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="dt-ns dt--fixed-ns">
            <div className="dtc-ns tc pv4 bg-black-05">
              <Link to="/admin">
                <div className="grow font-big no-underline ph3 pv2 mb2 dib mid-gray">
                  Office Admin
                </div>
              </Link>
            </div>
            <div className="dtc-ns tc pv4 bg-black-05">
              <Link to="/distributor">
                <div className="grow font-big no-underline ph3 pv2 mb2 dib mid-gray">
                  Distributor
                </div>
              </Link>
            </div>
            <div className="dtc-ns tc pv4 bg-black-05">
              <Link to="/recipient">
                <div className="grow font-big no-underline ph3 pv2 mb2 dib mid-gray">
                  Recipient
                </div>
              </Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Admin} />
            <Route path="/admin" component={Admin} />
            <Route path="/distributor" component={Distributor} />
            <Route path="/recipient" component={Recipient} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Portalnav;
