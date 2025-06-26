import CustomButton from "@/components/CustomButton";
import CustomForm from '@/components/CustomForm';
import CustomInput from '@/components/CustomInput';
import CustomText from '@/components/CustomText';
import CustomView from '@/components/CustomView';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import React = require('react');
import { Alert } from 'react-native';

export default function AppIndex()
{
    // const router = useRouter();
    const [nome, setNome] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState('');
    const calcular = () => 
    {
        if (!peso || isNaN(Number(peso)))
        {
            Alert.alert('Erro', 'Peso Inválido', [{text: 'OK', }]);
            return;
        }
        else if (!altura || isNaN(Number(altura)))
        {
            Alert.alert('Erro', 'Altura Inválida', [{text: 'OK', }]);
            return;
        }
        setImc(String((10000 * Number(peso) / Number(altura) / Number(altura)).toLocaleString('pt-BR')));
    }
    return (
        <CustomView>
            <CustomForm>
                <CustomText>Bem Vindo(a){nome}{'\n\n'}</CustomText>
                <CustomText>Digite seu Peso (quilos)</CustomText>
                <CustomInput onChangeText={x => {setPeso(x); setImc('')}}></CustomInput>
                <CustomText>Digite sua Altura (centímetros)</CustomText>
                <CustomInput onChangeText={x => {setAltura(x); setImc('')}}></CustomInput>
                <CustomButton texto='Calcular IMC' click={calcular}></CustomButton>
                <CustomText>{imc ? `Seu IMC é ${imc}` : ''}</CustomText>
            </CustomForm>
        </CustomView>
    )
}