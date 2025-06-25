import CustomButton from "@/components/CustomButton";
import CustomForm from '@/components/CustomForm';
import CustomInput from '@/components/CustomInput';
import CustomText from '@/components/CustomText';
import CustomView from '@/components/CustomView';
import { useRouter } from 'expo-router';
import React from "react";
import { useState } from 'react';

export default function AppIndex()
{
    const router = useRouter();
    const [nome, setNome] = useState('');

    function entrar_no_sistema()
    {
        if (true)
        {
            sessionStorage.setItem('nome', nome)
            router.push('/calculos');
        }
    }

    return (
        <CustomView>
            <CustomForm>
                <CustomText>Digite o Seu Nome</CustomText>
                <CustomInput onChangeText={setNome}></CustomInput>
                <CustomButton texto='Entrar no Sistema' click={entrar_no_sistema}></CustomButton>
            </CustomForm>
        </CustomView>
    )
}