import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import mainbuilder from './containers/mainbuilder/mainbuilder';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AUX from './hoc/Aux_';
import * as $ from 'jquery';

class App extends Component {

  render() {
    let layout = null;

    layout = (
      <Layout topbar={this.props.topbar} footer={this.props.footer} sidebar={this.props.sidebar} loginpage={this.props.loginpage}>
        <Switch>
          <Route path="/" component={mainbuilder} />
        </Switch>
      </Layout>);
    return (
      <AUX>
        {layout}
      </AUX>
    );
  }
}
const mapStatetoProps = state => {
  return {
    topbar: state.ui_red.topbar,
    footer: state.ui_red.footer,
    sidebar: state.ui_red.sidebar,
    loginpage: state.ui_red.loginpage
  };
}

export default withRouter(connect(mapStatetoProps)(App));