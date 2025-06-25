import React from 'react';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface Atributos
{
    children?: ReactNode;
}

export default function CustomForm({children}: Atributos)
{
    const estilo = StyleSheet.create(
    {
        View:
        {
            backgroundColor: 'white',
            boxShadow: '0 0 3rem 0rem rgba(0, 0, 0, 0.3)',
            marginHorizontal: 'auto',
            paddingHorizontal: 'auto',
            margin: 8,
            padding: 8,
            borderRadius: 8,
            minWidth: '50%',
            minHeight: '50%'
        }
    });

    return (
        <View style={estilo.View}>
            {children}
        </View>
    );
}