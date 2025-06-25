import React from 'react';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface Atributos
{
    children?: ReactNode;
}

export default function CustomView({children}: Atributos)
{
    const estilo = StyleSheet.create(
    {
        View:
        {
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        }
    });

    return (
        <View style={estilo.View}>
            {children}
        </View>
    );
}