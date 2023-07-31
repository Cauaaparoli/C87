import { Alert } from "react-native/types";


const firebaseConfig = {
    apiKey: "AIzaSyDyJybv5JPHvbTrMsrkHPXLXyE01zENrfM",
    authDomain: "espectagrama-5504f.firebaseapp.com",
    databaseURL: "https://espectagrama-5504f-default-rtdb.firebaseio.com",
    projectId: "espectagrama-5504f",
    storageBucket: "espectagrama-5504f.appspot.com",
    messagingSenderId: "970515744028",
    appId: "1:970515744028:web:bcfb4dbcc53eca97ae26d9"
  };

registerUser = (email, password, confirmPassword, first_name, last_name) =>{
    if (password == confirmPassword) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential)=>{
                Alert.alert("Usuário registrado!");
            })
            .catch(error => {
                Alert.alert(error.message);
            });
    } else {
        Alert.alert("As senhas não são iguais!");
    }
};

signIn = async (email, password) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(()=>{
            this.props.navigation.replace("Dashboasd");
        })
        .catch(error => {
            Alert.alert(error.message);
        });
};

fetchUser = () => {
    let theme;
    firebase
        .database()
        .ref("/users/" + firebase.auth().currentUser.uid)
        .on("value", (snapshot) => {
            theme = snapshot.val().current_theme
            this.setState({ light_theme: theme === "linght"})
        })
}