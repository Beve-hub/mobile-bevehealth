import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colorFamily, fontFamily, sizing } from '../../utils/constant';
import CustomButtonFilled from '../../utils/shared/CustomButtonFilled';
import CustomeButtonOutline from '../../utils/shared/CustomeButtonOutline';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../navigation/AuthNavigator';

const OnboardSelect = () => {
    const navigate = useNavigation<NavigationProp<AuthStackParamList>>();
  
  

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../../../assets/onboard 4.png')} style={styles.images} />
                <View style={styles.text}>
                    <Text style={styles.title}>Visual Health & Prescription</Text>
                    <Text style={styles.description}>Find a doctor for your health routine.</Text>
                </View>
                <View style={styles.button}>
                    <CustomButtonFilled 
                        title='Patient'
                        onPress={() => navigate.navigate('Login')}  
                        buttonStyle={{ width: 130 }} 
                    />
                    <CustomButtonFilled 
                        title='Staff'
                        onPress={() => navigate.navigate('DocLogin')}   
                        buttonStyle={{ width: 140 }} 
                        backgroundColor= {colorFamily.Color_Main}
                        textColor={colorFamily.Color_MAIN_Text}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default OnboardSelect;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: sizing.SCREEN_WIDTH,
        height: sizing.SCREEN_HEIGHT,
        padding: sizing.SPACING,
    },
    content: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    images: {
        width: 200,
        height: 300,
    },
    text: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: fontFamily.Inter_700Bold,
        paddingBottom: sizing.SPACING,
        fontSize: 20,
    },
    description: {
        fontFamily: fontFamily.Inter_400Regular,
        paddingBottom: sizing.SPACING,
        color: colorFamily.Color_MAIN_Texting,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: sizing.SPACING,
    },
    button: {
        flexDirection: "row",
        gap: 10,
    },
});
