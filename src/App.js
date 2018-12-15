import React, { Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { GlobalIcon } from "./static/iconfont/iconfont";
import Header from './common/header';
import store from './store';

import Home from './pages/home';
import Detail from './pages/detail';


class App extends Component {
  render() {
    return (
        <Provider store={ store }>
            <Fragment>
                <GlobalStyle />
                <GlobalIcon />
                <BrowserRouter>
                    <Fragment>
                        <Header />
                        <Route path="/" exact component={ Home } />
                        <Route path="/detail/:id" exact component={ Detail } />
                    </Fragment>
                </BrowserRouter>
            </Fragment>
        </Provider>
    );
  }
}

export default App;
