import React, { Component,Fragment } from 'react';
import { GlobalStyle } from './style';
import { GlobalIcon } from "./static/iconfont/iconfont";
import Header from './common/header';
class App extends Component {
  render() {
    return (
      <Fragment>
          <GlobalStyle />
          <GlobalIcon />
          <Header />
      </Fragment>
    );
  }
}

export default App;
