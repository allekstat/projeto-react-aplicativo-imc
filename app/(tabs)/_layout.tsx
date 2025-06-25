import { Ionicons } from "@expo/vector-icons";
import { Slot, Tabs } from "expo-router";
import { hide } from "expo-router/build/utils/splash";
import React from "react";

export default function AppLayout()
{
    return (
        <Tabs>
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
            />
            <Tabs.Screen
                name='calculos'
                options={{
                    tabBarStyle: { display: 'none' }
                }}
            />
        </Tabs>
    )
}