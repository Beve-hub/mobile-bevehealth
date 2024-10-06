import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TextInput, useTheme } from 'react-native-paper';

type CustomImageProps = {
  label: string;
  onImageUpload: (uri: string) => void;
  showButton?: boolean; // Prop to control the visibility of the button
};

const CustomImage: React.FC<CustomImageProps> = ({ label, onImageUpload, showButton = true }) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const theme = useTheme();

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedImageUri = result.assets[0].uri;
      setImageUri(selectedImageUri);
      onImageUpload(selectedImageUri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      {/* Show the image URI or select image option */}
      <TouchableOpacity onPress={handleImagePick} style={styles.inputField}>
        <TextInput
          mode="outlined"
          value={imageUri ? imageUri.split('/').pop() : ''}
          editable={false} // Makes the input non-editable
          onPress={handleImagePick}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 10,
  },
  inputField: {
    width: '100%',
  },
  
});
