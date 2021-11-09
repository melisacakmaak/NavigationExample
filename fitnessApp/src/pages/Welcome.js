import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Button from '../components/Button/Button'



export default function Welcome({navigation}) {


    function gotoMember(){

        navigation.navigate('MemberSignScreen');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}> Fitness App</Text>
            <Button text="Sign up" onPress={gotoMember}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       justifyContent: 'center',
       backgroundColor:'darkseagreen'
        
    },
    header:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        margin:10
    }

})