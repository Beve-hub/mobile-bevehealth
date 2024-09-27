import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store'; // Import the RootState type

// Define the message type structure based on your state
interface MessageType {
  type: 'text' | 'image' | 'audio';
  content: string;
  sender: 'user' | 'receiver';
}

const ChatBox: React.FC = () => {
  // Correctly type the state using RootState from your store
  const selectedUser = useSelector((state: RootState) => state.chat.selectedUser);
  
  // Check if selectedUser exists before accessing messages
  const messages = useSelector((state: RootState) =>
    selectedUser ? state.chat.messages[selectedUser] || [] : []
  );

  return (
    <View style={styles.container}>
      {/* Header with user image, video, and call icons */}
      <View style={styles.header}>
        <Image style={styles.userImage} source={{ uri: 'https://via.placeholder.com/50' }} />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Text style={styles.icon}>📹</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>📞</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat content */}
      <View style={styles.chatContent}>
        {messages.map((message: MessageType, index: number) => (
          <Text
            key={index}
            style={message.sender === 'user' ? styles.userMessage : styles.receiverMessage}
          >
            {message.content}
          </Text>
        ))}
      </View>

      {/* Chat input with media icons */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Type a message..." />
        <View style={styles.mediaIcons}>
          <TouchableOpacity><Text>📷</Text></TouchableOpacity>
          <TouchableOpacity><Text>🎙️</Text></TouchableOpacity>
          <TouchableOpacity><Text>🖼️</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatBox;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: '#f0f0f0' },
  userImage: { width: 50, height: 50, borderRadius: 25 },
  headerIcons: { flexDirection: 'row' },
  icon: { marginHorizontal: 10, fontSize: 24 },
  chatContent: { flex: 1, padding: 20 },
  userMessage: { textAlign: 'right', backgroundColor: '#DCF8C6', padding: 10, borderRadius: 10, marginBottom: 5 },
  receiverMessage: { textAlign: 'left', backgroundColor: '#ECECEC', padding: 10, borderRadius: 10, marginBottom: 5 },
  inputContainer: { flexDirection: 'row', padding: 10, borderTopWidth: 1, borderColor: '#ddd' },
  textInput: { flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 20, paddingLeft: 15 },
  mediaIcons: { flexDirection: 'row', marginLeft: 10 },
});
