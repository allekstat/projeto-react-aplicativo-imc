import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Atributos
{
    texto?: string;
    click?: () => void;
}

export default function CustomButton({texto, click}: Atributos)
{
    const estilo = StyleSheet.create(
    {
        Text:
        {
            color: 'white'
        },
        TouchableOpacity:
        {
            backgroundColor: 'teal',
            padding: 8,
            margin: 8,
            marginHorizontal: 'auto',
            borderRadius: 8,
            
        }
    });
    
    return (
        <TouchableOpacity onPress={click} style={estilo.TouchableOpacity}>
            <Text style={estilo.Text}>{texto}</Text>
        </TouchableOpacity>
    );
}