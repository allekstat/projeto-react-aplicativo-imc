import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface Atributos
{
    children?: string | string[];
}

export default function CustomText({children}: Atributos)
{
    const estilo = StyleSheet.create(
    {
        Text:
        {
            fontFamily: 'system-ui',
            fontSize: 20,
            textAlign: 'center'
        }
    });

    return (
        <Text style={estilo.Text}>
            {children}
        </Text>
    );
}