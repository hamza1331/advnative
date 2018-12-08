import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./../../_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./../../_laska_/globals.js";
import { Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  s3ad7962d: { fontSize: 30 },
  scb4305d3: {
    alignItems: `center`,
    backgroundColor: `rgba(216, 255, 197, 1)`,
    borderRadius: 10,
    borderWidth: 2,
    height: 100,
    justifyContent: `center`,
    width: 100
  },
  s3f34ac74: { fontSize: 30 },
  sb9a011c5: {
    alignItems: `center`,
    backgroundColor: `rgba(197, 213, 255, 1)`,
    borderRadius: 10,
    borderWidth: 2,
    height: 100,
    justifyContent: `center`,
    width: 100
  },
  s31fbe48b: {
    alignItems: `center`,
    backgroundColor: `rgba(255, 255, 255, 1)`,
    flex: 1,
    justifyContent: `space-around`,
    flexDirection: `row`
  }
});
class ABUndo extends React.PureComponent {
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
        <View style={styles.s31fbe48b}>
          <View style={styles.scb4305d3}>
            <Text style={styles.s3ad7962d}>A</Text>
          </View>
          <View style={styles.sb9a011c5}>
            <Text style={styles.s3f34ac74}>B</Text>
          </View>
        </View>
      </Fragment>
    );
  }
}

ABUndo.defaultProps = {};

export default ABUndo;

export { styles };
