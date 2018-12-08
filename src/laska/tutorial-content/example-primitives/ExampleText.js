import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./../../_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./../../_laska_/globals.js";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  se9162769: { fontSize: 30 }
});
class ExampleText extends React.PureComponent {
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
        <Text style={styles.se9162769}>Hello, world!</Text>
      </Fragment>
    );
  }
}

ExampleText.defaultProps = {};

export default ExampleText;

export { styles };
