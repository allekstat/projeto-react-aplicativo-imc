import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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