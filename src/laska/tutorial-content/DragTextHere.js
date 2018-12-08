import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./../_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./../_laska_/globals.js";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sda379064: {
    alignItems: `center`,
    backgroundColor: `rgba(218, 236, 255, 1)`,
    height: "100%",
    justifyContent: `center`
  }
});
class DragTextHere extends React.PureComponent {
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
        <View style={styles.sda379064} />
      </Fragment>
    );
  }
}

DragTextHere.defaultProps = {};

export default DragTextHere;

export { styles };
