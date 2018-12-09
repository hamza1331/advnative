import { openImageGallery } from '@expo/react-native-image-gallery';
import React from 'react'
import { TouchableWithoutFeedback,Dimensions,Image } from "react-native";


export default class ListItem extends React.Component {
    _openInImageGallery = () => {
      let list = this.props.images
      let { item } = this.props;
  
      this._view.measure((rx, ry, w, h, x, y) => {
        openImageGallery({
          animationMeasurements: {w, h, x, y},
          list,
          item
        });
      });
    };
  
    render() {
      let { item } = this.props;
  
      let { width, height } = item;
  
      let targetWidth = Dimensions.get('screen').width*0.9;
      let multiplier = targetWidth / width;
      let targetHeight = multiplier * height;
  
      return (
        <TouchableWithoutFeedback onPress={this._openInImageGallery}>
          <Image
            ref={view => { this._view = view }}
            source={item}
            style={{width: targetWidth, height: targetHeight, marginBottom: 20}} />
        </TouchableWithoutFeedback>
      );
    }
  
  }