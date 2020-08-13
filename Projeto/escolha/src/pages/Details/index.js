import React, {useState, useEffect} from 'react'
import {
View,
Text,
Image,
ImageBackground,
TouchableOpacity,
ScrollView, 
StyleSheet,
Linking
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {profiles} from '../../services/api';

export default function Details({navigation, route}){

    

    const [profs, setProfile] = useState([profiles])

    async function loadProfiles(){
        setProfile(profs)
        console.log(profs)
    }

    useEffect(() => {
        loadProfiles();
    })
    
    





    function goBack(){
        navigation.goBack();
    }

    function goFacebook(facebook_url){
        Linking.openURL(facebook_url)
    }

    function goTwitter(twitter_url){
        Linking.openURL(twitter_url)
    }

    function goInstagram(instagram_url){
        Linking.openURL(instagram_url)
    }
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../../assets/background.png')}>
                
            <ScrollView showsVerticalScrollIndicator={false}>
                {profs.map(profile => (
                    <View style={styles.card} key={profile.id}>
                    <Image style={styles.user} source={{uri: profile.perfil}} resizeMode='cover' />
                    <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                        <View style={styles.info}>
                            <View>
                                <Text>{profile.name}</Text>
                            </View>
                            <View>
                                <Text>{profile.age}</Text>
                            </View>
                            <View>
                                <Text>{profile.cargo}</Text>
                            </View>
                            <View>
                                <Text> <Text style={styles.bold}>{profile.aliance}</Text></Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 70, marginRight: 15, alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => goFacebook(profile.facebook_url)}>
                                <Ionicons name='logo-facebook' size={23}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => goTwitter(profiles.twitter_url)}>
                                <Ionicons name='logo-twitter' size={23}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => goInstagram(profiles.instagram_url)}>
                                <Ionicons name='logo-instagram' size={23}/>
                            </TouchableOpacity>
                        </View>

                    </View>
                        <View>
                            <View style={styles.title}>
                                <Text style={styles.titleText}>Descrição</Text>
                            </View>
                            <Text style={styles.desc}>
                                {profile.description}
                            </Text>
                        </View>
                </View>
                ))}
            
                
                <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}
                    onPress={() => goBack()}>
                    <Feather name='chevron-left' size={20} color='#ddd'/>
                    <Text style={{fontSize: 18, color: '#fff'}}>Voltar</Text>
                </TouchableOpacity>
            </ScrollView>
            </ImageBackground>

           
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    card: {
        marginTop: 20,
        height: 820,
        width: '95%',
        backgroundColor: '#fff',
        marginHorizontal: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        elevation: 4,
        
        
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    user: {
        marginTop: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        width: '95%',
    },
    name: {
        marginTop: 10,
        fontSize: 18,
        color: '#333'
    },
    age: {
        fontSize: 14,
        color: '#333' 
    },
    bold: {
        fontWeight: 'bold',
    },
    info: {
        marginTop: 20,
        marginLeft: 10,
    },
    title: {
        marginTop: 30,
        alignItems: 'center',
       
    },
    titleText: {
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Arial'
    },
    desc: {
        marginTop: 10,
        textAlign: 'center'
    }

})