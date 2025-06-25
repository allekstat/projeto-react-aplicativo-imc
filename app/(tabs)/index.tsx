import CustomButton from "@/components/CustomButton";
import CustomForm from '@/components/CustomForm';
import CustomInput from '@/components/CustomInput';
import CustomText from '@/components/CustomText';
import CustomView from '@/components/CustomView';
import { useRouter } from 'expo-router';
import React, { useEffect } from "react";
import { useState } from 'react';

export default function AppIndex()
{
    const router = useRouter();
    const [nome, setNome] = useState('');
    // const [peso, setPeso] = useState('');
    // const [altura, setAltura] = useState('');
    // const [imc, setImc] = useState('');
    // const calcular = () => setImc(String(Number(peso) / Number(altura) / Number(altura)));

    // function sair_do_sistema()
    // {
    //     if (true)
    //     {
    //         router.push('/');
    //     }
    // }

    // useEffect(() => setNome(sessionStorage.getItem('nome') || ''), []);
    // const router = useRouter();
    // const [nome, setNome] = useState('');

    function entrar_no_sistema(): void
    {
        if (check_nome(nome))
        {
            sessionStorage.setItem('nome', nome);
            router.push('./calculos');
        }
    }
    function check_nome(nome: string): boolean
    {
        if (!(nome.length > 2) || !!nome.match(/\d/g)) return false;
        return true;
    }

    return (
        <CustomView>
            <CustomForm>
                <CustomText>Calcular IMC{'\n\n'}</CustomText>
                
                <CustomText>Digite Seu Nome{'\n\n'}</CustomText>
                
                <CustomInput onChangeText={setNome}></CustomInput>

                <CustomText></CustomText>
                
                <CustomButton texto='Entrar no Sistema' click={entrar_no_sistema}></CustomButton>
            </CustomForm>
            
        </CustomView>
    )
}