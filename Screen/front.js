import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, Button, Alert, FlatList, Dimensions,
useState } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import song from './data';

const {width} = Dimensions.get('window')

export default function FrontPlayer() {

    const scrollX = useRef(new Animated.Value(0)).current;

    const renderItem = ({item}) =>{
        return (
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={item.image}/>
                <Text>{item.title}</Text>
                {/* <Text>{item.artist}</Text> */}
            </View>
        );
    }


    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data = {song} 
                renderItem = {renderItem} 
                keyExtractor = {(item) => item.id }
                horizontal
                showsHorizontalScrollIndicator = {false}
                pagingEnabled
                scrollEventThrottle={16}
                onScroll={Animated.event( [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false})}
            />
        </SafeAreaView>
    );

};



const styles = StyleSheet.create({
    container: {
        top: 35,
    },
    image: {
        width: 320,
        height: 320,
    },
    imgContainer: {
        width: width,
        alignItems: 'center',
    }
})