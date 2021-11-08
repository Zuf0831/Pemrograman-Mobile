import React from "react";
import { View,Text,ScrollView ,Image,Dimensions} from "react-native";
import Feed from "./News2";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import  Fontisto  from "react-native-vector-icons/Fontisto";
const {height,width} = Dimensions.get('window')

const News = () => {
    return(
        <View style={{paddingBottom : 10}}>
            <ScrollView>
                <View style={{flex:1,backgroundColor :'white',paddingTop :10}}>
                    <Text style={{fontFamily : 'TitilliumWeb-Bold',fontSize : 22, fontWeight :'700', paddingHorizontal : 20}}>
                        HOT NEWS !! 
                    </Text>
                    <View style={{height : 130, marginTop : 20}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                            <Feed imageUri={require('../images/Kucing.jpg')}
                            name = "Kucing Oren Tercyduk"/>
                            <Feed imageUri={require('../images/Kucing2.png')}
                            name = "Kucing Putih Selfie"/>
                            <Feed imageUri={require('../images/Kucing3.jpg')}
                            name = "Anak Kucing Jingga"/>
                            <Feed imageUri={require('../images/Kucing4.png')}
                            name = "Kucing Oren Liburan ke Rusia"/>
                            <Feed imageUri={require('../images/Kucing5.jpg')}
                            name = "Kucing Oreng dan Putih Hampir Cerai"/>
                            <Feed imageUri={require('../images/Anjing.jpg')}
                            name = "Anjing Lulus Beasiswa LPDP"/>
                        </ScrollView>
                    </View>

                    <View style={{marginTop:10, paddingHorizontal : 20}}>
                        <View style = {{alignContent : 'flex-start'}}/> 
                            <Image style={{width : 50, height : 50,borderRadius : 35,borderColor : 'black'}} source = {require('../images/Cindy.jpg')}/>
                            <Text style = {{fontWeight : '500'}}>Cindy Zhao</Text>
                        <View/>

                        <View style = {{width :width-40, height:400, marginTop : 10}}> 
                            <Image source={require('../images/Cindy2.jpg')} 
                                style={{flex:1 ,height : null,width : null,resizeMode : 'cover', borderRadius : 5, borderWidth : 1, borderColor : 'gray'}}/>
                            <View style = {{width : '35%',flexDirection : 'row',alignContent : 'flex-start', justifyContent : 'space-evenly'}}>
                                    <SimpleLineIcons name='like' size={20} style={{paddingTop : 8}}/>
                                    <SimpleLineIcons name='dislike' size={20} style={{paddingTop : 8}}/>
                                    <Fontisto name='comment' size={20} style={{paddingTop : 8}}/>
                            </View>
                        <Text style={{fontWeight: '300',marginTop : 10,color : 'black'}}>
                            That's the beauty of the shadow. We need our dark just like we need our light.
                        </Text>
                        </View>
                    </View>

                    <View style={{marginTop:10, paddingHorizontal : 20}}>
                        <View style = {{alignContent : 'flex-start'}}/> 
                            <Image style={{width : 50, height : 50,borderRadius : 35,borderColor : 'black'}} source = {require('../images/Dela.jpg')}/>
                            <Text style = {{fontWeight : '500'}}>Dela Kohl</Text>
                        <View/>

                        <View style = {{width :width-40, height:400, marginTop : 10}}> 
                            <Image source={require('../images/Dela2.jpg')} 
                                style={{flex:1 ,height : null,width : null,resizeMode : 'cover', borderRadius : 5, borderWidth : 1, borderColor : 'gray'}}/>
                            <View style = {{width : '35%',flexDirection : 'row',alignContent : 'flex-start', justifyContent : 'space-evenly'}}>
                                    <SimpleLineIcons name='like' size={20} style={{paddingTop : 8}}/>
                                    <SimpleLineIcons name='dislike' size={20} style={{paddingTop : 8}}/>
                                    <Fontisto name='comment' size={20} style={{paddingTop : 8}}/>
                            </View>
                        <Text style={{fontWeight: '300',marginTop : 10,color : 'black'}}>
                            If I say hi to someone and they don't say hi back, I just say hi to the next person.
                        </Text>
                        </View>
                    </View>

                    <View style={{marginTop:10, paddingHorizontal : 20}}>
                        <View style = {{alignContent : 'flex-start'}}/> 
                            <Image style={{width : 50, height : 50,borderRadius : 35,borderColor : 'black'}} source = {require('../images/Chloe.jpg')}/>
                            <Text style = {{fontWeight : '500'}}>Chloe Zhao</Text>
                        <View/>

                        <View style = {{width :width-40, height:400, marginTop : 10}}> 
                            <Image source={require('../images/Chloe2.jpg')} 
                                style={{flex:1 ,height : null,width : null,resizeMode : 'cover', borderRadius : 5, borderWidth : 1, borderColor : 'gray'}}/>
                            <View style = {{width : '35%',flexDirection : 'row',alignContent : 'flex-start', justifyContent : 'space-evenly'}}>
                                    <SimpleLineIcons name='like' size={20} style={{paddingTop : 8}}/>
                                    <SimpleLineIcons name='dislike' size={20} style={{paddingTop : 8}}/>
                                    <Fontisto name='comment' size={20} style={{paddingTop : 8}}/>
                            </View>
                        <Text style={{fontWeight: '300',marginTop : 10,color : 'black'}}>
                            Relationships are a reflection of what's going on inside of you.
                        </Text>
                        </View>
                    </View>

                    <View style={{marginTop:10, paddingHorizontal : 20}}>
                        <View style = {{alignContent : 'flex-start'}}/> 
                            <Image style={{width : 50, height : 50,borderRadius : 35,borderColor : 'black'}} source = {require('../images/Tomo.jpg')}/>
                            <Text style = {{fontWeight : '500'}}>Tomo Akihito</Text>
                        <View/>

                        <View style = {{width :width-40, height:400, marginTop : 10}}> 
                            <Image source={require('../images/Tomo2.jpg')} 
                                style={{flex:1 ,height : null,width : null,resizeMode : 'cover', borderRadius : 5, borderWidth : 1, borderColor : 'gray'}}/>
                            <View style = {{width : '35%',flexDirection : 'row',alignContent : 'flex-start', justifyContent : 'space-evenly'}}>
                                    <SimpleLineIcons name='like' size={20} style={{paddingTop : 8}}/>
                                    <SimpleLineIcons name='dislike' size={20} style={{paddingTop : 8}}/>
                                    <Fontisto name='comment' size={20} style={{paddingTop : 8}}/>
                            </View>
                        <Text style={{fontWeight: '300',marginTop : 10,color : 'black'}}>
                            井の中の蛙、大海を知らず .
                        </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default News;