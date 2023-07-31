import React from "react";
import { toggleSwitch } from "react-native";

toggleSwitch()
{
    const previous_state = this.state.isEnabled;
    const theme = !this.state.isEnabled ? "dark" : "light"
    var update = {}
    updates["/users/" + firebase.auth().currentUser.uid + "/current_theme"] = theme
    firebase.database().ref().update(updates);
    this.setState({isEnabled:!previous_state, light_theme: previous_state})
};