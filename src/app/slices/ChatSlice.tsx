import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ChatStateType {
  selectedUser: string | null;
  messages: {
    [userId: string]: { type: 'text' | 'image' | 'audio'; content: string; sender: 'user' | 'receiver' }[];
  };
}

const initialState: ChatStateType = {
  selectedUser: null,
  messages: {

    "Dr. John": [
      { type: 'text', content: 'Hello, nice to meet you', sender: 'receiver' },
      { type: 'text', content: 'Hi, how are you?', sender: 'user' },
      { type: 'text', content: 'Hi, how are you? jesus loves you and he will like to keep his commandment with you all the days of your life', sender: 'user' },
      { type: 'image', content: 'path_to_image.jpg', sender: 'receiver' },
      { type: 'image', content: 'path_to_image.jpg', sender: 'user' },
      { type: 'audio', content: 'path_to_audio.mp3', sender: 'user' },
      { type: 'audio', content: 'path_to_audio.mp3', sender: 'receiver' }
    ],
    "Dr. samuel": [
      { type: 'text', content: 'love you you', sender: 'receiver' },
      { type: 'text', content: 'Hi, how are you?', sender: 'user' },
      { type: 'image', content: 'path_to_image.jpg', sender: 'receiver' },
      { type: 'image', content: 'path_to_image.jpg', sender: 'user' },
      { type: 'audio', content: 'path_to_audio.mp3', sender: 'user' },
      { type: 'audio', content: 'path_to_audio.mp3', sender: 'receiver' }
    ],
    "Dr. david": [
      { type: 'text', content: 'Hello, nice to meet you', sender: 'receiver' },
      { type: 'text', content: 'Hi, how are you?', sender: 'user' },
      { type: 'image', content: 'path_to_image.jpg', sender: 'receiver' },
      { type: 'image', content: 'path_to_image.jpg', sender: 'user' },
      { type: 'audio', content: 'path_to_audio.mp3', sender: 'user' },
      { type: 'audio', content: 'path_to_audio.mp3', sender: 'receiver' }
    ],
    "Dominica": [
      { type: 'text', content: 'Hi, I am Dominica, your AI chat bot!', sender: 'receiver' },
      { type: 'text', content: 'How are you doing today? And How may i be of help?', sender: 'receiver' },
    ],
  },
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSelectUser: (state, action: PayloadAction<string>) => {
      state.selectedUser = action.payload;
    },
    setSendMessage: (
      state,
      action: PayloadAction<{ userId: string; message: { type: 'text' | 'image' | 'audio'; content: string; sender: 'user' | 'receiver' } }>
    ) => {
      const { userId, message } = action.payload;
      if (!state.messages[userId]) {
        state.messages[userId] = [];
      }
      state.messages[userId].push(message);


      if (userId === 'Dominica' && message.sender === 'user') {
        state.messages['Dominica'].push({
          type: 'text',
          content: "I'm Dominica, here to assist you!",
          sender: 'receiver',
        });
      }
    },
  },
});

export const { setSelectUser, setSendMessage } = chatSlice.actions;
export default chatSlice.reducer;