import { Ionicons } from "@expo/vector-icons";
import { Slot, Tabs } from "expo-router";
import React from "react";

export default function AppLayout()
{
    return (
        <Tabs screenOptions={{/*tabBarInactiveTintColor: 'blue'*/}}>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'INICIO',
                    tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name='perfil'
                options={{
                    title: 'PERFIL',
                    tabBarIcon: ({ color, size }) => <Ionicons name="at-circle-outline" size={size} color={color} />,
                }}
            />{/*
            <Tabs.Screen
                name='settings'
                options={{
                    title: 'configurações',
                    tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
                }}
            />zzzzzz*/}
        </Tabs>
    )
}