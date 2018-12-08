import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./../../_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./../../_laska_/globals.js";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sd386243e: {
    backgroundColor: `rgba(255, 255, 255, 1)`,
    borderWidth: 1,
    height: `100%`
  }
});
class ExampleView extends React.PureComponent {
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
        <View style={styles.sd386243e} />
      </Fragment>
    );
  }
}

ExampleView.defaultProps = {};

export default ExampleView;

export { styles };
