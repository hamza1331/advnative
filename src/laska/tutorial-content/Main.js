import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./../_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./../_laska_/globals.js";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  saef5d51a: { backgroundColor: `rgba(255, 251, 195, 1)`, flex: 1 }
});
class Main extends React.PureComponent {
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
        <View style={styles.saef5d51a} />
      </Fragment>
    );
  }
}

Main.defaultProps = {};

export default Main;

export { styles };
