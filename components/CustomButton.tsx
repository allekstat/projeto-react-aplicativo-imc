import React, { useRef } from 'react';
import {
    StyleSheet,
    Text,
    Animated,
    Pressable,
    Platform
} from 'react-native';

interface Atributos {
    texto?: string;
    click?: () => void;
    style?: any;  
}

export default function CustomButton({ texto, click, style }: Atributos) {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={click}
        >
            <Animated.View style={[styles.button, style,{ transform: [{ scale: scaleAnim }] }]}>
                <Text style={styles.text}>{texto}</Text>
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00ffff',
        paddingVertical: 14,
        paddingHorizontal: 24,
        margin: 8,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#0ff',
        shadowColor: '#00ffff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 12,
        elevation: 12, // Android shadow
    },
    text: {
        color: 'whit',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        textShadowColor: '#0ff',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 6,
        ...Platform.select({
            web: {
                transition: 'all 0.2s ease-in-out',
            }
        })
    }
});
