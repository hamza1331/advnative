import React from "react";

const IconSets = {
  FontAwesome: require("react-native-vector-icons/FontAwesome")
};

export default class Icon extends React.Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }
  render() {
    const iconParts = this.props.iconIdentifier.split("/");
    let iconPackageName = iconParts[0];
    let iconName = iconParts[1];
    if (!IconSets[iconPackageName]) {
      iconPackageName = "FontAwesome";
      iconName = "question";
    }
    const IconClass = IconSets[iconPackageName].default;
    const clonedProps = { ...this.props, name: iconName };
    delete clonedProps.iconIdentifier;

    // Support FontAwesome5's solid/light/brand
    if (clonedProps.iconStyle) {
      clonedProps[clonedProps.iconStyle] = true;
    }
    delete clonedProps.iconStyle;

    return (
      <IconClass {...clonedProps} ref={component => (this._root = component)} />
    );
  }
}

Icon.defaultProps = {
  iconIdentifier: "FontAwesome/question"
};
