import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, StyleSheet, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import CustomView from "@/components/CustomView";
import CustomForm from "@/components/CustomForm";

export default function Perfil() {
  const [nome, setNome] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  useEffect(() => {
    const nomeSalvo = sessionStorage.getItem('nome') || '';
    setNome(nomeSalvo);
  }, []);

  async function pickImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos de acesso às suas fotos para escolher uma imagem.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
      aspect: [1, 1],
    });


  }

  return (
    <CustomView>
      <CustomForm>
        <View style={styles.container}>
          <Text style={styles.nome}>Olá, {nome || 'Visitante'}!</Text>

          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>Nenhuma imagem selecionada</Text>
            </View>
          )}

          <View style={styles.buttonWrapper}>
            <Button title="Selecionar Foto de Perfil" onPress={pickImage} color="#00cccc" />
          </View>
        </View>
      </CustomForm>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00ffff',
    marginBottom: 24,
    textShadowColor: 'rgba(0,255,255,0.7)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#00ffff',
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 10,
  },
  placeholder: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#e0ffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#00cccc',
  },
  placeholderText: {
    color: '#008080',
  },
  buttonWrapper: {
    width: 180,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
