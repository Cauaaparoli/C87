import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import { FlatList, SafeAreaView, View } from 'react-native/types';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Tela Inicial" component={TabNavigator} />
      <Drawer.Screen name="Perfil" component={Profile} />
    </Drawer.Navigator>
  );
};

<View style={styles.container}>
    <SafeAreaView style={styles.droidSafeArea}/>
    <View style={styles.appTitle}>
        <View style={styles.appIcon}>
            <Image
                source={require("../assets/logo.png")}
            ></Image>
        </View>
        <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Espectagrama</Text>
        </View>
    </View>
    <View style={styles.cardContainer}>
        <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
        />
    </View>
</View>

  componentDidMount() {
    let theme;
    firebase
      .datebase()
      .ref("/users/" + firebase.auth().currentUser.uid)
      on("value", function(snapshot){
        theme = snapshot.val().current_theme;
      });
    this.setState({ light_theme: theme === "light" ? true : false });
  }

  render() {
    let props = this.props;
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          inactiveTintColor: this.state.light_theme ? "black" : "white",
          itemStyle: { marginVertical: 5 }
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name='Tela Inicial'
          component={StackNavigator}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name='Perfil'
          component={Profile}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name='Logout'
          component={Logout}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
    )
  }

export default DrawerNavigator;