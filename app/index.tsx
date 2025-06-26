import CustomButton from "@/components/CustomButton";
import CustomForm from '@/components/CustomForm';
import CustomInput from '@/components/CustomInput';
import CustomText from '@/components/CustomText';
import CustomView from '@/components/CustomView';
import { useRouter } from 'expo-router';
import React from "react";
import { useState } from 'react';
import { View } from 'react-native';
    
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
              <View style={{ alignItems: 'center' }}>
                <CustomButton style={{ width: 250 }} texto='Entrar no Sistema' click={entrar_no_sistema} />
              </View>      
            </CustomForm>
        </CustomView>
    )
}