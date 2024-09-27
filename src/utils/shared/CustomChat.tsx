import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectUser } from '../../app/slices/ChatSlice';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootState } from '../../app/store'; // Adjust import to your actual store

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

  return (
    <View style={styles.container}>
      {/* Search input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search users..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* AI Bot */}
      <TouchableOpacity style={styles.botContainer}>
        <Text style={styles.botText}>Chat with AI Health Bot</Text>
      </TouchableOpacity>

      {/* User list */}
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectUser(item)} style={styles.userItem}>
            <Text style={styles.userName}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CustomChat;

const styles = StyleSheet.create({
  container: { padding: 20 },
  searchInput: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 10 },
  botContainer: { backgroundColor: 'lightgray', padding: 15, marginBottom: 20 },
  botText: { textAlign: 'center' },
  userItem: { padding: 15, backgroundColor: 'white', marginBottom: 10, borderRadius: 5 },
  userName: { fontSize: 18 },
});
