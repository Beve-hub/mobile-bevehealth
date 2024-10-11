import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';
import React from 'react';
import { fontFamily, fontSize, sizing } from '../../../utils/constant';

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

const AvaPro = () => {
  const renderCard: ListRenderItem<Doctor> = ({ item }) => {
    const initials = item.name
      .split(' ')
      .map((name) => name[0])
      .join('')
      .toUpperCase();

    return (
      <View style={styles.card}>
        <View style={styles.initialsContainer}>
          <Text style={styles.initialsText}>{initials}</Text>
        </View>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.proText}>{item.pro}</Text>
      </View>
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
    height: 120, // Adjust the height to fit the scrollable area
    paddingVertical: sizing.SUB_SPACING,
    marginVertical:sizing.MINI_SPACING
  },
  card: {
    width: 80, // Compact width
    height: 100, // Compact height
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: sizing.SUB_SPACING,
    paddingVertical: sizing.SUB_SPACING,
    backgroundColor: '#f5f5f5', // Optional: background color for each card
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
