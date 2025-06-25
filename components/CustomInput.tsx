import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface Atributos
{
    children?: string;
    onChangeText?: (texto: string) => void;
}

export default function CustomInput({onChangeText, children}: Atributos)
{
    const estilo = StyleSheet.create(
    {
        TextInput:
        {
            backgroundColor: 'white',
            marginHorizontal: 'auto',
            margin: 8,
            padding: 8,
            borderRadius: 8
        }
    });

    return (
        <TextInput onChangeText={onChangeText} style={estilo.TextInput}>
            {children}
        </TextInput>
    );
}