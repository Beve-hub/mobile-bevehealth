import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store'; 
import { colorFamily, sizing } from './../constant';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';

interface MessageType {
  type: 'text' | 'image' | 'audio';
  content: string;
  sender: 'user' | 'receiver';
}

const ChatBox: React.FC = () => {
  const [inputText, setInputText] = useState<string>(''); 
  const [mediaSelected, setMediaSelected] = useState<boolean>(false); 

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
 // Initialize navigation
  const selectedUser = useSelector((state: RootState) => state.chat.selectedUser);
  const messages = useSelector((state: RootState) =>
    selectedUser ? state.chat.messages[selectedUser] || [] : []
  );

 

  const handleInputChange = (text: string) => {
    setInputText(text);
  };

  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    const initials = nameParts.map(part => part[0]).join('');
    return initials.slice(0, 2);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header with back button and user initials */}
        <View style={styles.header}>
          <View style={styles.leftheader}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.avatar}>
              <Text style={styles.initials}>{getInitials(selectedUser || '')}</Text>
            </View>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Video')}>
              <View style={styles.icon}>
                <FontAwesome name="video-camera" size={20} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Call')}>
              <View style={styles.icon}>
                <MaterialIcons name="call" size={20} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.chatContent}>
            {messages.map((message: MessageType, index: number) => (
              <View key={index} 
              style={[message.sender === 'user' ? styles.userMessage : styles.receiverMessage,
                {
                  maxWidth: '80%',
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                },
              ]}>
                <Text >
                {message.content}
              </Text>
              </View>              
            ))}
          </View>
        </ScrollView>

        {/* Chat input with media icons */}
        <View style={styles.BottomContainer}>          
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Type a message..."
              value={inputText}
              onChangeText={handleInputChange}
            />
          </View>
          <View style={styles.mediaIcons}>
            <TouchableOpacity>
              <Text>
                <SimpleLineIcons name="picture" size={20} color="black" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>
                <Feather name="camera" size={20} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mediaIcon}>
            {inputText.length > 0 || mediaSelected ? (
              <TouchableOpacity>
                <Text>
                  <Ionicons name="send" size={20} color={colorFamily.Color_SUB_MAIN_Text} />
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Text>
                  <FontAwesome name="microphone" size={20} color={colorFamily.Color_SUB_MAIN_Text} />
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatBox;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingVertical: sizing.SPACING,
    paddingHorizontal: sizing.SUB_SPACING,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: sizing.SPACING,
    backgroundColor: '#f0f0f0',
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
    fontSize: 18,
  },
  headerIcons: { 
    flexDirection: 'row',
    gap: sizing.SUB_SPACING },
  leftheader:{
    flexDirection: 'row',
    gap: sizing.SUB_SPACING,
    alignItems: 'center', 
  },  
  icon: {
    backgroundColor: colorFamily.Color_Main,
    padding: sizing.MINI_SPACING,
    borderRadius: 50,
  },
  chatContent: { 
    flex: 1, 
    padding: 20 
  },
  userMessage: {
    textAlign: 'right',
    backgroundColor: '#DCF8C6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  receiverMessage: {
    textAlign: 'left',
    backgroundColor: '#ECECEC',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  BottomContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  inputContainer: {
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  textInput: {
     height: 40, 
     borderColor: 'gray' 
    },
  mediaIcons: {
     flexDirection: 'row',
     marginLeft: sizing.SPACING,
     gap: sizing.SUB_SPACING
  },
  mediaIcon: {
    width:40,
    height: 40,    
    flexDirection: 'row',
    marginLeft: sizing.SPACING,
    backgroundColor: colorFamily.Primary,
    padding: sizing.SUB_SPACING,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
