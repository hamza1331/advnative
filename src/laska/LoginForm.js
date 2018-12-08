import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import Icon from "./_laska_/Icon";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Text,
  TouchableHighlight
} from "react-native";
import img363308cf from "./tutorial-content/example-components/Clipboard_Image_2018_07_02T22_59_59_02_00.png";

const styles = StyleSheet.create({
  sabf10b08: { color: `rgba(214, 214, 214, 1)`, fontSize: 60 },
  s3f2a83c0: { bottom: -25, position: `absolute` },
  s363308cf: {
    alignItems: `center`,
    borderBottomWidth: 1,
    borderColor: `rgba(214, 214, 214, 1)`,
    height: 120,
    justifyContent: `flex-end`,
    width: `100%`
  },
  s7e94da25: { color: `rgba(154, 164, 189, 1)`, fontSize: 15 },
  s65e721f4: {
    alignItems: `center`,
    borderRightColor: `rgba(152, 163, 188, 1)`,
    borderRightWidth: 1,
    justifyContent: `center`,
    width: 30
  },
  sbf855d53: { flex: 1, marginLeft: 10 },
  sb975dad4: {
    backgroundColor: `rgba(78, 89, 115, 1)`,
    borderRadius: 10,
    height: 40,
    marginBottom: 20,
    padding: 10,
    flexDirection: `row`
  },
  sf3e3314f: { color: `rgba(154, 164, 189, 1)`, fontSize: 15 },
  s651b1e16: {
    alignItems: `center`,
    borderRightColor: `rgba(152, 163, 188, 1)`,
    borderRightWidth: 1,
    justifyContent: `center`,
    width: 30
  },
  secfd0988: { flex: 1, marginLeft: 10 },
  sff0b43cd: {
    backgroundColor: `rgba(78, 89, 115, 1)`,
    borderRadius: 10,
    height: 40,
    marginBottom: 10,
    padding: 10,
    flexDirection: `row`
  },
  see81b71d: { color: `rgba(42, 245, 225, 1)` },
  s42d2eae4: { color: `rgba(42, 245, 225, 1)`, fontSize: 10, marginLeft: 5 },
  s666033fd: { flex: 1, flexDirection: `row` },
  sbab8b5c1: { color: `rgba(42, 245, 225, 1)`, fontSize: 10, marginLeft: 5 },
  s388f6a59: { flex: 1, justifyContent: `flex-end`, flexDirection: `row` },
  sd6e5dad3: { borderRadius: 10, marginBottom: 10, flexDirection: `row` },
  sd8f5b1dc: { borderRadius: 5 },
  s2629c2dd: {
    alignItems: `center`,
    backgroundColor: `rgba(42, 245, 225, 1)`,
    borderRadius: 5,
    height: 40,
    justifyContent: `center`,
    marginTop: 20,
    padding: 5,
    width: `100%`
  },
  s72036be4: {
    justifyContent: `center`,
    marginBottom: 30,
    marginTop: 30,
    maxWidth: 250,
    width: `100%`
  },
  s56d98a83: {
    alignItems: `center`,
    backgroundColor: `rgba(49, 50, 84, 1)`,
    borderRadius: 5,
    overflow: `hidden`,
    width: `100%`
  },
  s01bcab65: { color: `rgba(0, 0, 0, 0.39)`, fontSize: 18 },
  s52460b4c: {
    alignItems: `center`,
    backgroundColor: `rgba(42, 245, 225, 1)`,
    borderRadius: 3,
    height: 50,
    justifyContent: `center`,
    position: `absolute`,
    top: -10,
    width: 200
  },
  s16cf2ea8: {
    alignItems: `center`,
    backgroundColor: `rgba(49, 50, 84, 1)`,
    borderRadius: 5,
    maxWidth: 300,
    width: `100%`
  }
});
class LoginForm extends React.PureComponent {
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
        <View style={styles.s16cf2ea8}>
          <View style={styles.s56d98a83}>
            <ImageBackground source={img363308cf} style={styles.s363308cf}>
              <View style={styles.s3f2a83c0}>
                <Icon
                  iconIdentifier={`FontAwesome/user-circle-o`}
                  style={styles.sabf10b08}
                />
              </View>
            </ImageBackground>
            <View style={styles.s72036be4}>
              <View style={styles.sb975dad4}>
                <View style={styles.s65e721f4}>
                  <Icon
                    iconIdentifier={`FontAwesome/user`}
                    style={styles.s7e94da25}
                  />
                </View>
                <TextInput
                  placeholder={`username`}
                  placeholderTextColor={`rgba(152, 163, 188, 1)`}
                  style={styles.sbf855d53}
                />
              </View>
              <View style={styles.sff0b43cd}>
                <View style={styles.s651b1e16}>
                  <Icon
                    iconIdentifier={`FontAwesome/lock`}
                    style={styles.sf3e3314f}
                  />
                </View>
                <TextInput
                  placeholder={`password`}
                  placeholderTextColor={`rgba(152, 163, 188, 1)`}
                  style={styles.secfd0988}
                />
              </View>
              <View style={styles.sd6e5dad3}>
                <View style={styles.s666033fd}>
                  <Icon
                    iconIdentifier={`FontAwesome/check-square-o`}
                    style={styles.see81b71d}
                  />
                  <Text style={styles.s42d2eae4}>Remember me</Text>
                </View>
                <View style={styles.s388f6a59}>
                  <Text style={styles.sbab8b5c1}>Forgot your password?</Text>
                </View>
              </View>
              <TouchableHighlight style={styles.s2629c2dd} onPress={() => {}}>
                <Text style={styles.sd8f5b1dc}>LOGIN</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.s52460b4c}>
            <Text style={styles.s01bcab65}>SIGN IN</Text>
          </View>
        </View>
      </Fragment>
    );
  }
}

LoginForm.defaultProps = {};

export default LoginForm;

export { img363308cf, styles };
