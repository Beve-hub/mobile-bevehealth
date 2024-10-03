import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

type CustomImageProps = {
  label: string;
  onImageUpload: (uri: string) => void;
};

const CustomImage: React.FC<CustomImageProps> = ({ label, onImageUpload }) => {
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
      <Text style={[styles.label, { color: theme.colors.primary }]}>{label}</Text>
      <TouchableOpacity onPress={handleImagePick} style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text>Select an image</Text>
        )}
      </TouchableOpacity>
      <Button mode="contained" onPress={handleImagePick} style={styles.button}>
        Upload Image
      </Button>
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
  },
});
