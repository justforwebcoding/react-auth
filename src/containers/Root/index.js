import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../Login";
import Main from "../../components/Main";
import News from "../../components/News";
import Profile from "../../components/Profile";
import requireAuthentication from "../AuthenticatedComponent";

class Root extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/news" component={News} />
        <Route path="/profile" component={requireAuthentication(Profile)} />
      </Switch>
    );
  }
}

export default Root;
