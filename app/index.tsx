import CustomButton from "@/components/CustomButton";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function AppIndex()
{
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState('');
    const calcular = () => setImc(String(Number(peso) / Number(altura) / Number(altura)));
    return (
        <View>
            <CustomButton texto='oi' click={() => null}></CustomButton>
            <Text>digite seu peso</Text>

            <TextInput onChangeText={setPeso}></TextInput>

            <Text>digite sua </Text>

            <TextInput onChangeText={setAltura}></TextInput>

            <Text>seu peso {peso} quilos</Text>

            <Text>sua altura {altura} metros</Text>

            <Button title='calcular' onPress={calcular}></Button>

            <Text>{imc}</Text>

        </View>
    )
}