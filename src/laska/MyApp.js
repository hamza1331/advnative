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
  CameraRoll,
  TouchableWithoutFeedback
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
    this.initial ={
      chosenDate: new Date(),
      image:'',
      images:[],
      galleryImages:[],
      showSubmit:true,
      name:'',
      email:'',
      location:'',
      description:'',
      ccInputs:[],
      ccEmails:'',
      showCC:false
    }
    this.state = this.initial
    this.setDate = this.setDate.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this)
    this.renderAddButton=this.renderAddButton.bind(this)
    this.handleMultipleEmails=this.handleMultipleEmails.bind(this)
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
  async handleSubmit(){
    if(this.state.description&&this.state.chosenDate&&this.state.email&&this.state.name&&this.state.galleryImages.length>0){
      let images = this.state.galleryImages
      let apiUrl = 'http://192.168.43.25:8080/users';
      let formData = new FormData();
      formData.append('name',this.state.name)
      formData.append('email',this.state.email)
      formData.append('description',this.state.description)
      formData.append('location',this.state.location)
      formData.append('date',this.state.chosenDate.toString())
         if(this.state.ccEmails.length>0){
          let inputs = JSON.stringify(this.state.ccEmails.split('\n'))
          console.log(inputs)
          formData.append('cc',inputs)    
         }            
      images.forEach((image,index)=>{
      let uri = image.imageUrl
      let uriParts = uri.split('.');
      let fileType = uriParts[uriParts.length - 1];
    
      formData.append('photo', {
        uri,
        name: `photo#${index}.${fileType}`,
        type: `image/${fileType}`,
      });    
    })
        let options = {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        };
          fetch(apiUrl, options).then(res=>res.json()).then(data=>{
            Alert.alert('Success',data.message)
            this.setState({
              chosenDate: new Date(),
              image:'',
              images:[],
              galleryImages:[],
              showSubmit:true,
              name:'',
              email:'',
              location:'',
              description:'',
              ccInputs:[],
              ccEmails:'',
              showCC:false
            })
         }).catch(err=>{
           Alert.alert('Failed',err)
         });
    }
    else
    Alert.alert('Falied','Fill all the values..')
  }
  renderAddButton(){
    return(
      <TouchableWithoutFeedback onPress={this.handleMultipleEmails}>
      <Icon
          name='plus'
          size={20}
          style={{marginLeft:5,marginTop:15}}
        />
      </TouchableWithoutFeedback>
    )
  }
  handleMultipleEmails(){
   this.setState({
     showCC:true
   })
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
              <TextInput value={this.state.name} autoFocus={true} onChangeText={text=>this.setState({name:text})} underlineColorAndroid='transparent' keyboardType='default' placeholder={`Client Name`} style={styles.s7ff692e2} />
            </View>
           <View style={{flexDirection:'row',paddingTop:10}}>
              <TextInput value={this.state.email} onChangeText={text=>this.setState({email:text})} underlineColorAndroid='transparent' placeholder={`Email`} style={styles.sa5239b01} keyboardType='email-address' />
            {!this.state.showCC&&this.renderAddButton()}
            </View>
            {this.state.showCC&&<View>
              <TextInput 
              underlineColorAndroid='transparent'
                multiline={true}
                numberOfLines={4}
                placeholder={`CC Emails`}
                style={styles.s6dd4cd00}
                onChangeText={text=>this.setState({ccEmails:text})}
                value={this.state.ccEmails}
              />
            </View>}         
            <View>
              <TextInput value={this.state.location} onChangeText={text=>this.setState({location:text})} underlineColorAndroid='transparent'placeholder={`Location`} style={styles.s96e03553} />
            </View>
            <View>
              <TextInput 
              underlineColorAndroid='transparent'
                multiline={true}
                numberOfLines={4}
                placeholder={`Project Description`}
                style={styles.s6dd4cd00}
                onChangeText={text=>this.setState({description:text})}
                value={this.state.description}
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
              <Button title={`Submit`} onPress={this.handleSubmit} />
            </View>}
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}
MyApp = withNavigationProp(MyApp);
export default MyApp;