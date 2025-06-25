import CustomButton from "@/components/CustomButton";
import CustomForm from '@/components/CustomForm';
import CustomInput from '@/components/CustomInput';
import CustomText from '@/components/CustomText';
import CustomView from '@/components/CustomView';
import { useRouter } from 'expo-router';
import React from "react";
import { useEffect, useState } from 'react';

export default function AppIndex()
{
    const router = useRouter();
    const [nome, setNome] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    // const [imc, setImc] = useState('');
    // const calcular = () => setImc(String(Number(peso) / Number(altura) / Number(altura)));

    function sair_do_sistema()
    {
        if (true)
        {
            router.push('/');
        }
    }

    useEffect(() => setNome(sessionStorage.getItem('nome') || ''), []);

    return (
        <CustomView>
            <CustomForm>
                <CustomText>Bem Vindo(a) {nome} {'\n\n'}</CustomText>
                <CustomText>Digite seu Peso (quilos)</CustomText>
                <CustomInput onChangeText={setPeso}></CustomInput>
                <CustomText>Digite sua Altura (centímetros)</CustomText>
                <CustomInput onChangeText={setAltura}></CustomInput>
                <CustomButton texto='Sair do Sistema' click={sair_do_sistema}></CustomButton>
            </CustomForm>
        </CustomView>
    )
}