import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectUser } from '../../app/slices/ChatSlice';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootState } from '../../app/store'; // Adjust import to your actual store
import { colorFamily, sizing } from '../constant';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { fontSize } from './../constant';

interface ChatStackParamList {
  ChatBox: undefined; // Define navigation stack param types
}

const CustomChat: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const messages = useSelector((state: RootState) => state.chat.messages);
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<ChatStackParamList>>(); // Properly typed navigation

  // Extract user IDs and filter based on the search input
  const users = Object.keys(messages);
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchText.toLowerCase())
  );

  // Function to handle user selection
  const handleSelectUser = (userId: string) => {
    dispatch(setSelectUser(userId));
    navigation.navigate('ChatBox'); // Navigate to ChatBox screen
  };

  // Function to get initials from user name
  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    const initials = nameParts.map(part => part[0]).join('');
    return initials.slice(0, 2); // Return only the first two initials
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
              {/* Search input */}
              <View style={styles.searchContainer}>
        {/* Search Icon */}
        <Text style={styles.searchIcon}>
          <AntDesign name="search1" size={20} color={colorFamily.Color_MAIN_Texting} /></Text>
        
        {/* Search input */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search users..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* AI Bot */}
      <TouchableOpacity style={styles.botContainer}>
        <View style={styles.botContnet}>          
        <Feather name="triangle" size={24} color={colorFamily.Color_Red} />
        <View>
        <Text style={styles.botText}>Dominica</Text>
        <Text style={styles.botText}> AI Chat Bot</Text>
        </View>        
        </View>        
      </TouchableOpacity>

      {/* User list */}
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectUser(item)} style={styles.userItem}>
            <View style={styles.userRow}>
              {/* Profile image with initials */}
              <View style={styles.avatar}>
                <Text style={styles.initials}>{getInitials(item)}</Text>
              </View>
              <Text style={styles.userName}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
        </ScrollView>
    </SafeAreaView>
  );
};

export default CustomChat;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingVertical: sizing.SPACING * 3,
    paddingHorizontal: sizing.SPACING,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: sizing.SPACING, // Optional: Add bottom padding
  },
  searchContainer: {
    flexDirection: 'row', // Arrange icon and input horizontally
    alignItems: 'center', // Align items vertically in the center
    backgroundColor: colorFamily.Color_Main,
    borderRadius: 10, // Round the edges
    gap: 10,
    marginVertical: sizing.SPACING,
  },
  searchIcon: {
    marginLeft: 10, // Space between icon and input
    fontSize: 20, // Adjust the size of the icon
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    width: '100%',
  },
  botContainer: {
    borderColor: colorFamily.Color_Main,
    borderBottomWidth: 1,
    padding: 15,
    marginBottom: 10,
  },
  botContnet: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizing.SUB_SPACING,
  },
  botText: {
    textAlign: 'left',
    fontSize: fontSize.medium,
  },
  userItem: {
    padding: 15,
    borderColor: colorFamily.Color_Main,
    borderBottomWidth: 1,
    marginBottom: 5,
    borderRadius: 5,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colorFamily.Color_Main,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  initials: {
    color: colorFamily.Color_MAIN_Text,
    fontSize: fontSize.Sub_medium,
  },
  userName: {
    fontSize: fontSize.medium,
  },
});
