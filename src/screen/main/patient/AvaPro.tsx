import { StyleSheet, Text, View, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import React from 'react';
import { fontFamily, fontSize, sizing } from '../../../utils/constant';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootStack';

interface Doctor {
  name: string;
  pro: string;
}

const data: Doctor[] = [
  { name: 'Dr. David', pro: 'Surgeon' },
  { name: 'Dr. Domi', pro: 'Medical Lab' },
  { name: 'Dr. Janet', pro: 'Optician' },
  { name: 'Dr. Sarah', pro: 'Pharmacist' },
  { name: 'Dr. Dan', pro: 'Pharmacist' },
];

// Define the navigation prop with the correct type
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'DocDetails'>;

const AvaPro = () => {
  const navigation = useNavigation<NavigationProp>();

  const renderCard: ListRenderItem<Doctor> = ({ item }) => {
    const initials = item.name
      .split(' ')
      .map((name) => name[0])
      .join('')
      .toUpperCase();

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => 
          navigation.navigate('DocDetails', { documentData: item }) // Ensure you pass the route name and params correctly
        }
      >
        <View style={styles.initialsContainer}>
          <Text style={styles.initialsText}>{initials}</Text>
        </View>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.proText}>{item.pro}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AvaPro;

const styles = StyleSheet.create({
  container: {
    height: 120,
    paddingVertical: sizing.SUB_SPACING,
    marginVertical: sizing.MINI_SPACING,
  },
  card: {
    width: 80,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: sizing.SUB_SPACING,
    paddingVertical: sizing.SUB_SPACING,
    backgroundColor: '#f5f5f5',
  },
  initialsContainer: {
    backgroundColor: '#6200ea',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: sizing.SPACING,
  },
  initialsText: {
    color: '#fff',
    fontSize: fontSize.Sub_medium,
    fontFamily: fontFamily.Inter_600SemiBold,
  },
  nameText: {
    fontSize: fontSize.Sub_small,
    fontFamily: fontFamily.Inter_600SemiBold,
    textAlign: 'center',
  },
  proText: {
    fontSize: fontSize.small,
    color: '#555',
    textAlign: 'center',
  },
});
