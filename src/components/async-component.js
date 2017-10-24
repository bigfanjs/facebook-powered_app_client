import React, {Component} from 'react';

export default (getComponent) => (
  class Async extends Component {
    static Component = null;

    state = {Component: Async.Component}

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          Async.Component = Component;
          this.setState({ Component });
        });
      }
    }
  
    render() {
      const {Component} = this.state;

      if (!Component) return null;

      return <Component {...this.props} />;
    }
  }
);