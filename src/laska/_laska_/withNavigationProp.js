import { withProps } from "recompose";

export default withProps(props => {
  if (!props.navigation) {
    return {
      navigation: {}
    };
  } else if (!props.navigation.state) {
    return {
      navigation: {
        state: {}
      }
    };
  } else if (props.navigation.state.params) {
    return props.navigation.state.params;
  }
  return {};
});
