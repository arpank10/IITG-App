import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Header, Body, Title, Content, Left, Right } from 'native-base';
import  Icon from 'react-native-vector-icons/Ionicons'

class CustomHeader extends Component {

    render() {
        return (
            <Header>
                <Left><Icon name="md-menu" size={35} onPress={() => this.props.drawerOpen()} /></Left>
                <Body>
                <Title>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}
export default CustomHeader;