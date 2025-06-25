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
   

    return (
        <CustomView>
            {/* <CustomForm>
                <CustomText>Bem Vindo(a) {nome} {'\n\n'}</CustomText>
                <CustomText>Digite seu Peso (quilos)</CustomText>
                <CustomInput onChangeText={setPeso}></CustomInput>
                <CustomText>Digite sua Altura (centímetros)</CustomText>
                <CustomInput onChangeText={setAltura}></CustomInput>
                <CustomText>{imc ? `O imc é ${imc}` : ''}</CustomText>
                <CustomButton texto='Sair do Sistema' click={sair_do_sistema}></CustomButton>
            </CustomForm> */}
        </CustomView>
    )
}