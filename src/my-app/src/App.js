import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';
import { GlobalStyle } from './style.js';
import { IconGlobalStyle } from './static/iconfont/iconfont';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <IconGlobalStyle />
          <Header />
        </Fragment>
      </Provider>
    )
  }
}

export default App;
