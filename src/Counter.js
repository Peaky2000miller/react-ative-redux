import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux'
import { addition, subtration } from './store/action';

const mappinsValue = (state) => {
    return state.counter
}
const mappingfunctions = {
    addition, subtration
}

const Counter = (props) => {

    const { counter, name } = props;

    return (
        <View style={styles.container}>
            <Button title='Add' onPress={() =>props.addition()} />
            <Text>{counter}</Text>
            <Text>{name}</Text>
            <Button title='Subtract' onPress={() =>props.subtration()} />
        </View>
    );
};
export default connect(mappinsValue, mappingfunctions)(Counter);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});