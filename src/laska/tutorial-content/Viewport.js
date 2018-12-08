import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./../_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./../_laska_/globals.js";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  s969e8b4b: { height: `100%` }
});
class Viewport extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    if (this.awake) {
      this.awake();
    }
  }

  render() {
    return (
      <Fragment>
        <View style={styles.s969e8b4b} />
      </Fragment>
    );
  }
}

Viewport.defaultProps = {};

export default Viewport;

export { styles };
