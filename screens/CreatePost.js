import React, {Component} from 'react';
import { Alert } from 'react-native';
import { 
    View,
    Image,
    Text,
    SafeAreaView,
    ScrollView, 
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer';
import { RFValue } from 'react-native-responsive-fontsize';

export default class CreateCard extends Component {

    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                        source={require("../assets/logo.png")}
                        style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Novo Post</Text>
                    </View>
                </View>
                <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <Image
                        source={preview_images[this.state.previewImage]}
                        style={styles.previewImage}
                        ></Image>
                        <View style={{height:
                        RFValue(this.state.dropdownHeight)}}>
                            //codigo do dropdown picker
                            <DropDownPicker
                                items={[
                                    {label:"Image1", value:"Image_1"},
                                    {label:"Image2", value:"Image_2"},
                                    {label:"Image3", value:"Image_3"},
                                    {label:"Image4", value:"Image_4"},
                                    {label:"Image5", value:"Image_5"},
                                    {label:"Image6", value:"Image_6"},
                                    {label:"Image7", value:"Image_7"},
                                ]}
                                defaultValue={this.state.previewImage}
                                containerStyle={{
                                    height: 40,
                                    borderRadius: 20,
                                    marginBottom: 10
                                }}
                                onOpen={()=>{
                                    this.setState({dropdownHeight: 170});
                                }}
                                onClose={()=>{
                                    this.setState({dropdownHeight: 40});
                                }}
                                style={{backgroundColor:"transparent"}}
                                itemStyle={{
                                    justifyContent:"flex-start"
                                }}
                                dropDownStyle={{backgroundColor:"#2a2a2a"}}
                                labelStyle={{
                                    color:"white"
                                }}
                                onChangelItem={Item=>
                                this.setState({
                                    previewImage:Item.value
                                })
                                }
                            />
                        </View>
                        <TextInput
                            style={styles.inputFont}
                            onChangeText={caption =>this.setState({caption})}
                            placeholder={"Legenda"}
                            placeholderTextColor="white"
                        />
                    </ScrollView>
                </View>
                <View style={{flex: 0.08}}/>
            </View>

        );
    }

    async addPost() {
        if (
            this.state.caption
        ) {
            let postData = {
                preview_image: this.state.previewImage,
                caption: this.state.caption,
                author: firebase.auth().currentUser.displayName,
                cerated_on: new Date(),
                author_uid: firebase.auth().currentUser.uid,
                profile_image: this.state.profile_image,
                likes: 0
            };
            await firebase
                .datebase()
                .ref(
                    "/posts/" +
                    Math.random()
                        .toString(36)
                        .slice(2)
                )
                .set(postDate)
                .then(function (snapshot) {});
                this.props.navigation.navigate("Feed");
        } else {
            Alert.alert(
                "Error",
                "Todos os campos são obrigatórios!",
                [{ text: "OK", onPress: () => console.log("OK Pessionado")}],
                { cancelable: false}
            )
        }
    }
}

