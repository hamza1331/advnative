import React, { Fragment } from "react";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  Button,
  ScrollView,
  StatusBar,
  Alert,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageGallery, { openImageGallery } from '@expo/react-native-image-gallery';
import { DatePicker } from 'native-base';

import {Font} from 'expo'
class ListItem extends React.Component {
  _openInImageGallery = () => {
    let { item } = this.props;

    this._view.measure((rx, ry, w, h, x, y) => {
      openImageGallery({
        animationMeasurements: {w, h, x, y},
        list,
        item,
      });
    });
  };

  render() {
    let { list, item } = this.props;

    let { width, height } = item;

    let targetWidth = Dimensions.get('screen').width*0.9;
    let multiplier = targetWidth / width;
    let targetHeight = multiplier * height;

    return (
      <TouchableWithoutFeedback onPress={this._openInImageGallery}>
        <Image
          ref={view => { this._view = view }}
          source={{uri: item.imageUrl}}
          style={{width: targetWidth, height: targetHeight, marginBottom: 20}} />
      </TouchableWithoutFeedback>
    );
  }

}
class FakeContent extends React.Component {
  render() {
    return (
        <ScrollView style={{flex: 1}} contentContainerStyle={{alignItems: 'center', paddingTop: 20}}>
          {list.map(item => <ListItem key={item.imageUrl} item={item} />)}
        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  s1b4c318c: { height: `100%`, width: `100%` },
  sb32b3614: {
    alignItems: `center`,
    backgroundColor: `rgba(191, 191, 191, 1)`,
    flex: 1,
    justifyContent: `center`,
    maxHeight: `20%`,
    width: `100%`
  },
  s7ff692e2: {
    backgroundColor: `rgba(255, 255, 255, 1.0)`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 10,
    borderWidth: 2,
    color: `rgba(60, 60, 65, 1)`,
    height: 30,
    marginLeft: 10,
    marginTop: 10,
    paddingLeft: 5,
    width: `90%`
  },
  sa5239b01: {
    backgroundColor: `rgba(255, 255, 255, 1.0)`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 10,
    borderWidth: 2,
    color: `rgba(60, 60, 65, 1)`,
    height: 30,
    marginLeft: 10,
    marginTop: 10,
    width: `90%`
  },
  s96e03553: {
    backgroundColor: `rgba(255, 255, 255, 1.0)`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 10,
    borderWidth: 2,
    color: `rgba(60, 60, 65, 1)`,
    height: 30,
    marginLeft: 10,
    marginTop: 10,
    paddingLeft: 5,
    width: `90%`
  },
  s6dd4cd00: {
    backgroundColor: `rgba(255, 255, 255, 1.0)`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 10,
    borderWidth: 2,
    color: `rgba(60, 60, 65, 1)`,
    marginLeft: 10,
    marginTop: 10,
    paddingLeft: 5,
    width: `90%`
  },
  sabb47c64: {
    backgroundColor: `rgba(255, 255, 255, 1.0)`,
    borderColor: `rgba(0, 0, 0, 1)`,
    borderRadius: 10,
    borderWidth: 1,
    height: 35,
    marginLeft: 10,
    marginTop: 10,
    width: `90%`
  },
  s8d05a1eb: { fontSize: 50 },
  s36d0bd15: {
    alignItems: `center`,
    height: 30,
    justifyContent: `center`,
    marginLeft: 120,
    marginTop: 15,
    width: `30%`
  },
  sc9f26d46: {
    height: 30,
    justifyContent: `center`,
    marginLeft: 10,
    marginTop: 15,
    width: `90%`
  },
  sc1a4da9b: { height: `80%`, width: `100%` },
  s583641f3: {
    backgroundColor: `rgba(255, 255, 255, 1)`,
    flex: 1,
    maxHeight: `100%`,
    width: `100%`
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
class MyApp extends React.PureComponent {
  static navigationOptions = { title: "My App" };
  constructor(props) {
    super(props);

    this.state = {};
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  
  render() {
    return (
      <Fragment>
        <View style={styles.s583641f3}>
        <StatusBar hidden/>
          <View style={styles.sb32b3614}>
            <Image source={require('./icn.jpeg')} style={styles.s1b4c318c} />
          </View>
          <ScrollView style={styles.sc1a4da9b}>
            <View>
              <TextInput autoFocus={true}  underlineColorAndroid='transparent' keyboardType='default' placeholder={`Client Name`} style={styles.s7ff692e2} />
            </View>
            <View>
              <TextInput underlineColorAndroid='transparent' placeholder={`Email`} style={styles.sa5239b01} keyboardType='email-address' />
            </View>
            <View>
              <TextInput  underlineColorAndroid='transparent'placeholder={`Location`} style={styles.s96e03553} />
            </View>
            <View>
              <TextInput 
              underlineColorAndroid='transparent'
                multiline={true}
                numberOfLines={4}
                placeholder={`Project Description`}
                style={styles.s6dd4cd00}
              />
            </View>
            <View style={styles.sabb47c64}>
              {/* <TextInput placeholder={new Date()} defaultValue={new Date()} underlineColorAndroid='transparent' style={styles.sabb47c64} /> */}
              <DatePicker
            defaultDate={new Date()}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select Date"
            textStyle={{ color: "black",fontSize:20,fontWeight:'bold' }}
            placeHolderTextStyle={{ color: "black",fontWeight:'bold' }}
            onDateChange={this.setDate}
            />
            </View>
            <View style={styles.s36d0bd15} onTouchEnd={()=>{
              Alert.alert('Failed','Hello')
            }}>
              <Icon
                name='camera'
                style={styles.s8d05a1eb}
              />
            </View>
            <View style={styles.sc9f26d46}>
              <Button title={`Submit`} onPress={() => {}} />
            </View>
            <FakeContent/>
            <ImageGallery />
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}
const list = [
  {
    description: ':O hat etc',
    imageUrl: 'https://images.freeimages.com/images/large-previews/e6b/yellow-beetle-1366999.jpg',
    width: 480,
    height: 480,
  },
  {
    imageUrl: 'https://images.freeimages.com/images/large-previews/d1f/balloon-contest-1417733.jpg',
    description: 'wood',
    width: 640,
    height: 640,
  },
  {
    imageUrl: 'https://images.freeimages.com/images/large-previews/4dc/street-1366583.jpg',
    description: 'making beer etc',
    width: 640,
    height: 640,
  },
  {
    imageUrl: 'https://images.freeimages.com/images/large-previews/ed3/a-stormy-paradise-1-1563744.jpg',
    description: 'making beer etc',
    width: 640,
    height: 640,
  },
  {
    imageUrl: 'https://images.freeimages.com/images/large-previews/371/swiss-mountains-1362975.jpg',
    description: 'making beer etc',
    width: 640,
    height: 640,
  },
  {
    imageUrl: 'https://images.freeimages.com/images/large-previews/859/burning-trees-1391193.jpg',
    description: 'making beer etc',
    width: 640,
    height: 640,
  },
];
MyApp.defaultProps = {};

MyApp = withNavigationProp(MyApp);

export default MyApp;

export { styles };
