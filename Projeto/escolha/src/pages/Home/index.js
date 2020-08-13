import React, {useState, useEffect} from 'react';
import {
View,
Text,
TextInput,
Image,
ImageBackground,
StyleSheet,
ScrollView,
TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';
import {profiles} from '../../services/api';






export default function Home({navigation}){
    const [profs, setProfs] = useState([profiles])


    async function loadProfe(){
        setProfs(profiles)
    }

    useEffect(() => {
        loadProfe();
    })
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../../assets/background.png')}>
            <View style={styles.input}>
                    <TextInput 
                        style={{fontSize: 16}}
                        placeholder='Procure seu candidato...'
                        autoCapitalize='none'
                        autoCorrect={false}
                    
                    />
                    <Icon style={{marginRight: 10}} name='search' size={20} color='#333' />
                </View>
                <ScrollView>
                    {profs.map(profile => (
                        <TouchableOpacity onPress={() => navigation.push('Details', {
                            profile_id: profile.id
                        })}>
                        <View style={styles.card} key={profile.id}>
                            <Image style={styles.user} source={{uri: profile.perfil}} resizeMode='cover'/>
                            <View style={styles.desc}>
                                 <Text style={styles.name}>{profile.name}</Text>
                                 <Text style={styles.age}>{`${profile.age} anos`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    ))}
                    
                </ScrollView>
                
            </ImageBackground>
            
          
            
         </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    input: {
        width: '97%',
        height: 45,
        backgroundColor: '#fff',
        marginTop: 3,
        marginHorizontal: 5,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 6,
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    card: {
        marginTop: 20,
        height: 340,
        width: '95%',
        backgroundColor: '#fff',
        marginHorizontal: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        elevation: 4,
        
        
    },
    user: {
        marginTop: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        width: 325,
        height: 250,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    desc: {
        flexDirection: 'column',
        width: '90%',
        marginHorizontal: 12,

    },
    name: {
        marginTop: 10,
        fontSize: 20,
        color: '#333'
    },
    age: {
        fontSize: 14,
        color: '#333' 
    }
})