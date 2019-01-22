import React from "react";

import Root from "../Root";
import Menu from "../../components/Menu";

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Root />
      </div>
    );
  }
}

export default App;
