import { Image } from 'expo-image'
import { Platform, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'

import { HelloWave } from '@/components/hello-wave'
import ParallaxScrollView from '@/components/parallax-scroll-view'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { Link } from 'expo-router'

import { supabase } from '@/lib/supabase'

export default function HomeScreen() {

  const [status, setStatus] = useState('Probando conexión...')

  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase
        .from('clientes')
        .select('*')
        .limit(1)

      if (error) {
        console.log('Error conexión:', error.message)
        setStatus('❌ Error de conexión')
      } else {
        console.log('Conectado. Datos:', data)
        setStatus('✅ Conectado a Supabase')
      }
    }

    testConnection()
  }, [])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">App Préstamos</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Estado de conexión:</ThemedText>
        <ThemedText>{status}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Información técnica</ThemedText>
        <ThemedText>
          Plataforma actual: {Platform.OS}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <ThemedText type="subtitle">Ir al modal</ThemedText>
        </Link>
      </ThemedView>

    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 12,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})