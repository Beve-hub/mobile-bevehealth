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
    },
  },
});

export const { setSelectUser, setSendMessage } = chatSlice.actions;
export default chatSlice.reducer;