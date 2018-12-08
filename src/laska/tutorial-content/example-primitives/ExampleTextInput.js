import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./../../_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./../../_laska_/globals.js";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  s76a317c3: {
    backgroundColor: `rgba(255, 255, 255, 1)`,
    borderColor: `rgba(119, 119, 121, 1)`,
    borderWidth: 1,
    height: "100%",
    minWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    width: "100%"
  }
});
class ExampleTextInput extends React.PureComponent {
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
        <TextInput
          placeholder={`This is a text input`}
          style={styles.s76a317c3}
        />
      </Fragment>
    );
  }
}

ExampleTextInput.defaultProps = {};

export default ExampleTextInput;

export { styles };
