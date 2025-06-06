import { StyleSheet, Text, TouchableOpacity } from 'react-native';
interface Atributos
{
    texto?: string;
    click?: () => void;
}
export default function CustomButton({texto, click}: Atributos)
{
    const estilo = StyleSheet.create({ CustomButton:
    {
        backgroundColor: 'red'
    }});
    return (
        <TouchableOpacity onPress={click} style={estilo.CustomButton}>
            <Text>{texto}</Text>
        </TouchableOpacity>
    );
}