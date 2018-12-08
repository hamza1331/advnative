import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./../../_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./../../_laska_/globals.js";
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  s276f8752: { fontWeight: `700` },
  sae5338a6: {
    backgroundColor: `rgba(185, 185, 185, 1)`,
    height: 30,
    justifyContent: `center`,
    paddingLeft: 5
  },
  s54539fdd: { flex: 1, padding: 10 },
  s7ecf39ff: { flex: 1, justifyContent: `center` },
  s1e9ea85d: {
    alignItems: `center`,
    backgroundColor: `rgba(204, 204, 204, 1)`,
    borderColor: `rgba(140, 140, 140, 1)`,
    borderWidth: 1,
    height: 30,
    justifyContent: `center`,
    marginBottom: 10,
    marginTop: 10,
    width: 80
  },
  s855fdf25: { alignItems: `center` },
  s81dc1f73: { backgroundColor: `rgba(228, 228, 228, 1)`, height: `100%` }
});
class Dialog extends React.PureComponent {
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
        <View style={styles.s81dc1f73}>
          <View style={styles.sae5338a6}>
            <Text style={styles.s276f8752}>Information</Text>
          </View>
          <View style={styles.s54539fdd}>
            <Text>
              A SQL query goes into a bar, walks up to two tables and asks, "Can
              I join you?"
            </Text>
          </View>
          <View style={styles.s855fdf25}>
            <TouchableHighlight style={styles.s1e9ea85d} onPress={() => {}}>
              <View style={styles.s7ecf39ff}>
                <Text>Dismiss</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </Fragment>
    );
  }
}

Dialog.defaultProps = {};

export default Dialog;

export { styles };
