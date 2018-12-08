import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./../../_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./../../_laska_/globals.js";
import { Image, StyleSheet } from "react-native";
import imgf1409c1a from "./parallax_mountain.png";

const styles = StyleSheet.create({
  sf1409c1a: { height: `100%` }
});
class ExampleImage extends React.PureComponent {
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
        <Image source={imgf1409c1a} style={styles.sf1409c1a} />
      </Fragment>
    );
  }
}

ExampleImage.defaultProps = {};

export default ExampleImage;

export { imgf1409c1a, styles };
