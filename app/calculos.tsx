import CustomButton from "@/components/CustomButton";
import CustomForm from '@/components/CustomForm';
import CustomInput from '@/components/CustomInput';
import CustomText from '@/components/CustomText';
import CustomView from '@/components/CustomView';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from 'react-native';

export default function AppIndex()
{
    const router = useRouter();
    const [nome, setNome] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    function sair_do_sistema() {
        router.push('/');
    }

    useEffect(() => setNome(sessionStorage.getItem('nome') || ''), []);

    return (
        <CustomView>
            <CustomForm>
                <CustomText>Bem Vindo(a) {nome} {'\n\n'}</CustomText>
                
                <CustomText>Digite seu Peso (quilos)</CustomText>
                <CustomInput onChangeText={setPeso} />

                <CustomText>Digite sua Altura (centímetros)</CustomText>
                <CustomInput onChangeText={setAltura} />

                <View style={styles.buttonRow}>
                    <CustomButton texto='Sair do Sistema' click={sair_do_sistema} />
                    <CustomButton texto='Calcular IMC' click={() => {}} />
                </View>
            </CustomForm>
        </CustomView>
    );
}

const styles = StyleSheet.create({
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 16,
    }
});
