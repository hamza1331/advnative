import ReactNative from "react-native";
const API = {};

const isShellApp = false;

if (isShellApp) {
  const { ExponentKernel } = ReactNative.NativeModules;
  API["ShellApp"] = ExponentKernel;
}

Object.keys(ReactNative).forEach(key => {
  if (["Linking", "Dimensions", "Alert"].includes(key)) {
    API[key] = ReactNative[key];
  }
});

export default API;
