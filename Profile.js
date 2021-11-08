import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Profile = () => {
    return(
      <View>
            <View>
                <View style={styles.skyBlue}></View>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={{ uri: 'https://randomuser.me/api/portraits/men/51.jpg' }} />
                    <Text style={styles.name}>RIZKY</Text>
                </View>
            </View>
            <View>
                <View style={styles.metdataWrapper}>
                    <Text style={styles.metadata}>Bio : </Text>
                    <Text style={styles.detailData}>Menunggu Kepastian yang tidak pasti</Text>
                </View>
                <View style={styles.metdataWrapper}>
                    <Text style={styles.metadata}>Cell Phone : </Text>
                    <Text style={styles.detailData}>08125261712728</Text>
                </View>
                <View style={styles.metdataWrapper}>
                    <Text style={styles.metadata}>Email : </Text>
                    <Text style={styles.detailData}>Gaktaucuy12@gmail.com</Text>
                </View>
                <View style={styles.metdataWrapper}>
                    <Text style={styles.metadata}>Address : </Text>
                    <Text style={styles.detailData}>Jalan Kenangan Yang Telah Dilupakan</Text>
                </View>
                <View style={styles.metdataWrapper}>
                    <Text style={styles.metadata}>Univeristy : </Text>
                    <Text style={styles.detailData}>Telkom Univeristy</Text>
                </View>
            </View>
    </View>
    )
  }

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    skyBlue: {
        backgroundColor: 'skyblue',
        height: 100
    },
    imageWrapper: {
        alignItems: 'center',
        marginTop: -75,
        marginBottom: 10
    },
    image: {
        width: 150,
        height: 150,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 100
    },
    name: {
        fontSize: 40,
        color: 'grey'
    },
    metdataWrapper: {
        flexDirection: 'row',
        marginBottom: 10
    },
    metadata: {
        fontWeight: '600',
        fontSize: 15,
        width: 100,
        textAlign: 'right',
        marginRight: 3
    },
    detailData: {
        fontSize: 15
    }
});
