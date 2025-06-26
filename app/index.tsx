import CustomButton from "@/components/CustomButton";
import CustomForm from '@/components/CustomForm';
import CustomInput from '@/components/CustomInput';
import CustomText from '@/components/CustomText';
import CustomView from '@/components/CustomView';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';

export default function AppIndex()
{
    // const [nome, setNome] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState('');
    const [classificacao, setClassificacao] = useState('');
    const [cor, setCor] = useState('black');
    const calcular = () => 
    {
        if (!peso || isNaN(Number(peso)))
        {
            if (Platform.OS == 'web')
            {
                alert('Erro\nPeso Inválido.');
            }
            else
            {
                Alert.alert('Erro', 'Peso Inválido.', [{text: 'OK', }]);
            }
            return;
        }
        else if (!altura || isNaN(Number(altura)))
        {
            if (Platform.OS == 'web')
            {
                alert('Erro\nAltura Inválida.');
            }
            else
            {
                Alert.alert('Erro', 'Altura Inválida.', [{text: 'OK', }]);
            }
            return;
        }
        setImc(String((10000 * Number(peso) / Number(altura) / Number(altura)).toLocaleString('pt-BR')));
    }
    useEffect(() =>
    {
        const imc_numero = Number(imc.replace(/\./g,'').replace(/,/,'.'));
        if (imc_numero < 18.5)
        {
            setClassificacao('Baixo Peso');
            setCor('magenta');
        }
        else if (imc_numero < 25)
        {
            setClassificacao('Normal');
            setCor('greenyellow');
        }
        else if (imc_numero < 30)
        {
            setClassificacao('Sobrepeso');
            setCor('orange');
        }
        else
        {
            setClassificacao('Obesidade');
            setCor('orangered');
        }
    }, [imc])
    return (
        <CustomView>
            <CustomForm>
                <CustomText>Bem Vindo(a){'\n\n'}</CustomText>
                <CustomText>Digite seu Peso (quilos)</CustomText>
                <CustomInput onChangeText={x => {setPeso(x); setImc('')}}></CustomInput>
                <CustomText>Digite sua Altura (centímetros)</CustomText>
                <CustomInput onChangeText={x => {setAltura(x); setImc('')}}></CustomInput>
                <CustomButton texto='Calcular IMC' click={calcular}></CustomButton>
                <CustomText style={{color: cor, textShadow: '1px 0 1px black, 0.7px 0.7px 1px black, 0 1px 1px black, -0.7px 0.7px 1px black, -1px 0 1px black, -0.7px -0.7px 1px black, 0 -1px 1px black, 0.7px -0.7px 1px black'}}>{imc ? `Seu IMC é ${imc} - ${classificacao}` : ''}</CustomText>
            </CustomForm>
        </CustomView>
    )
}