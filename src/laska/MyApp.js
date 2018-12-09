import React, { Fragment } from "react";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import {
  Image,
  View,
  TextInput,
  Button,
  ScrollView,
  StatusBar,
  Alert,
  CameraRoll
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from "./styles";
import ImageGallery from '@expo/react-native-image-gallery';
import { DatePicker } from 'native-base';
import {Font,ImagePicker,Permissions} from 'expo'
import ListItem from './ListItems'
class MyApp extends React.Component {
  static navigationOptions = { title: "My App" };
  constructor(props) {
    super(props);
    this.state = {};
    this.state = { chosenDate: new Date(),image:'',images:[],galleryImages:[],showSubmit:true };
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
  _takePhoto = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync();

      this._handleImagePicked(pickerResult);
    }
  };
  _handleImagePicked = async pickerResult => {
    
    try {
      this.setState({
        uploading: true
      });

      if (!pickerResult.cancelled) {
       CameraRoll.saveToCameraRoll(pickerResult.uri)
       let imgs = this.state.images
       imgs.push(pickerResult)
       let gImgs = this.state.galleryImages
       let obj = {}
       let index = gImgs.length+1
       obj.imageUrl = pickerResult.uri
       obj.description = 'Image#'+index
       obj.width=640
       obj.height = 640
       gImgs.push(obj)
        this.setState({
          images: imgs,
          galleryImages:gImgs
        });
      }
    } catch (e) {
      Alert.alert('Failed','Upload failed, sorry :(');
    } finally {
      this.setState({
        uploading: false
      });
    }
  };
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
            <View style={styles.s36d0bd15} onTouchEnd={this._takePhoto}>
              <Icon
                name='camera'
                style={styles.s8d05a1eb}
              />
            </View>
           {this.state.images.length>0 && <ScrollView contentContainerStyle={{alignItems: 'center', paddingTop: 20}}>
          {this.state.images.map((item,index) => <ListItem key={index} item={item} images={this.state.galleryImages} />)}
        </ScrollView>}
            {this.state.images.length>0 && <ImageGallery/>}
            {this.state.showSubmit&&<View style={styles.sc9f26d46}>
              <Button title={`Submit`} onPress={() => {}} />
            </View>}
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}
MyApp.defaultProps = {};

MyApp = withNavigationProp(MyApp);

export default MyApp;

export { styles };
