import React from 'react'
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

export default function Details({navigation}){

    function goBack(){
        navigation.goBack();
    }

    function goFacebook(){
        Linking.openURL('https://www.facebook.com/jairmessias.bolsonaro')
    }

    function goTwitter(){
        Linking.openURL('https://twitter.com/jairbolsonaro')
    }

    function goInstagram(){
        Linking.openURL('https://www.instagram.com/jairmessiasbolsonaro/?hl=pt-br')
    }
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../../assets/background.png')}>
                
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
                    <Image style={styles.user} source={require('../../assets/user.png')} />
                    <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                        <View style={styles.info}>
                            <View>
                                <Text> Jair Bolsonaro</Text>
                            </View>
                            <View>
                                <Text> 64 anos </Text>
                            </View>
                            <View>
                                <Text> Presidente do Brasil</Text>
                            </View>
                            <View>
                                <Text> <Text style={styles.bold}>Aliança pelo Brasil</Text></Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 70, marginRight: 15, alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => goFacebook()}>
                                <Ionicons name='logo-facebook' size={23}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => goTwitter()}>
                                <Ionicons name='logo-twitter' size={23}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => goInstagram()}>
                                <Ionicons name='logo-instagram' size={23}/>
                            </TouchableOpacity>
                        </View>

                    </View>
                        <View>
                            <View style={styles.title}>
                                <Text style={styles.titleText}>Descrição</Text>
                            </View>
                            <Text style={styles.desc}>
                            Bolsonaro foi anunciado como pré-candidato à Presidência do Brasil em março de 2016 pelo PSC. Somente em janeiro de 2018, no entanto, anunciou sua filiação ao PSL, o nono partido político de sua carreira desde que foi eleito vereador em 1988. Sua campanha presidencial foi lançada em agosto de 2018, com o general reformado Hamilton Mourão como seu vice na chapa. Ele se apresentou como um candidato conservador,[ defensor de valores familiares e de políticas mais rigorosas na área da segurança pública. Sofreu um atentado durante ato de campanha no dia 6 de setembro, recebendo um golpe de faca no abdômen. Em 7 de outubro, Bolsonaro ficou em primeiro lugar no primeiro turno das eleições presidenciais de 2018, com o candidato Fernando Haddad, do Partido dos Trabalhadores (PT), em segundo. Foi eleito Presidente da República no segundo turno, em 28 de outubro, com 55,13% dos votos válidos.
                            </Text>
                        </View>
                </View>
                
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