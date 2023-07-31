import React from "react";
import { renderItem } from "react-native";

renderItem = ({Item:post}) => {
    return <PostCard post={post} navigation={this.props.navigation} />
}