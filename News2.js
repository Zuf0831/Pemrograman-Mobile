import React, { Component } from "react";
import { View,Text,Image} from "react-native";

class Feed extends Component {
    render(){
        return(
        <View style = {{height : 120, width : 130,marginLeft : 20, borderWidth : 0.5,borderColor : 'gray'}}>
            <View style= {{flex : 2}}>
               <Image source={this.props.imageUri} style={{flex : 1,height : null,width : null, resizeMode : 'cover',borderRadius : 5}}/> 
            </View>
            <View style = {{flex : 1, paddingLeft : 10,paddingRight : 10,paddingBottom : 5}}>
                <Text style ={{textAlign:'center',fontFamily:'TitilliumWeb-Regular',color : 'black'}}>{this.props.name}</Text>
    
            </View>
    
        </View>
        )
    }  
}

export default Feed;