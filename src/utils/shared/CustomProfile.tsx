import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colorFamily, fontFamily, fontSize, sizing } from '../constant';
import AntDesign from '@expo/vector-icons/AntDesign';
import { RootStackParamList } from '../../navigation/RootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';

type Props = {};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CustomProfile = (props: Props) => {
  const route = useRoute();
  const { initials } = route.params as { initials: string };
  const navigation = useNavigation<NavigationProp>();

  const [profileImage, setProfileImage] = useState<string | null>(null);  // State to hold selected image

  const pickImage = async () => {
    // Request permission to access the gallery
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access gallery is required!');
      return;
    }

    // Open the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      // Set the selected image URI to state
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text><AntDesign name="arrowleft" size={24} color="black" /></Text>
        </TouchableOpacity>
        <Text style={styles.title}>My Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.profile}>
          <View style={styles.profilePicContainer}>
            {/* Display selected image or initials */}
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <Text style={styles.profilePicText}>{initials}</Text>
            )}
       
            <TouchableOpacity onPress={pickImage} style={styles.editIcon}>
              <AntDesign name="edit" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contactnfos}>
          <View style={styles.contactnfo}>
            <Text style={styles.nameTitle}>Full Name: </Text>
            <Text style={styles.box}>John Doe</Text>
          </View>
          <View style={styles.contactnfo}>
            <Text style={styles.nameTitle}>Card Number: </Text>
            <Text style={styles.box}>BH224411</Text>
          </View>
          <View style={styles.contactnfo}>
            <Text style={styles.nameTitle}>Email: </Text>
            <Text style={styles.box}>{initials.toLowerCase()}@example.com</Text>
          </View>
          <View style={styles.contactnfo}>
            <Text style={styles.nameTitle}>Phone Number: </Text>
            <Text style={styles.box}>09024365768</Text>
          </View>
          <View style={styles.contactnfo}>
            <Text style={styles.nameTitle}>Sex: </Text>
            <Text style={styles.box}>Male</Text>
          </View>
          <View style={styles.contactnfo}>
            <Text style={styles.nameTitle}>Blood Group: </Text>
            <Text style={styles.box}>O+</Text>
          </View>
          <View style={styles.contactnfo}>
            <Text style={styles.nameTitle}>Role: </Text>
            <Text style={styles.box}>Surgeon</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomProfile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: sizing.SPACING,
    width: sizing.SCREEN_WIDTH,
    height: sizing.SCREEN_HEIGHT,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: sizing.SPACING,
  },
  profile: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicContainer: {
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: colorFamily.Color_SUB,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizing.SPACING,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  profilePicText: {
    color: colorFamily.Color_MAIN_Text,
    fontFamily: fontFamily.Inter_600SemiBold,
    fontSize: fontSize.Sub_Normal,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
  },
  contactnfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: sizing.SPACING,
  },
  contactnfos: {
    marginTop: sizing.SPACING * 3,
  },
  box: {
    borderWidth: 1,
    width: sizing.SCREEN_INPUTS,
    padding: sizing.SUB_SPACING,
    marginTop: sizing.SUB_SPACING,
    borderColor: colorFamily.Color_MAIN_Texting,
    color: colorFamily.Color_MAIN_Texting,
    borderRadius: sizing.MINI_SPACING,
  },
  nameTitle: {
    color: colorFamily.Color_MAIN_Texting,
  },
  header: {
    flexDirection: 'row',
    gap: sizing.SPACING,
    alignItems: 'center',
    marginVertical: sizing.SPACING,
  },
  title: {
    fontFamily: fontFamily.Inter_700Bold,
    fontSize: fontSize.normal,
  },
});
