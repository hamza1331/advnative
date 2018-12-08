// This special class is needed to have images with an unknown height.
// On RN this is done using the aspectRatio prop, but this is unimplemented on RNW.
// https://github.com/necolas/react-native-web/issues/427

// As a workaround, we simply render a DOM img element

import React from "react";

export default class BrowserImage extends React.Component {
  setNativeProps = nativeProps => {
    this._root.setNativeProps(nativeProps);
  };

  render() {
    return (
      <img ref={component => (this._root = component)} {...this.props} alt="" />
    );
  }
}
