import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface Atributos
{
    children?: string | string[];
    style?: any;
}

export default function CustomText({children, style}: Atributos)
{
    const estilo = StyleSheet.create(
    {
        Text:
        {
            fontFamily: 'system-ui',
            fontSize: 20,
            textAlign: 'center',
            ...style
        }
    });

    return (
        <Text id='' style={estilo.Text}>
            {children}
        </Text>
    );
}