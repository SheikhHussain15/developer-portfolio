'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox, useVideoTexture } from '@react-three/drei'
import { Component, Suspense, useEffect, useMemo, useRef, type ReactNode } from 'react'
import { Group, SRGBColorSpace, VideoTexture } from 'three'

type SceneBoundaryProps = { children: ReactNode; fallback: ReactNode }
type SceneBoundaryState = { hasError: boolean }

class SceneBoundary extends Component<SceneBoundaryProps, SceneBoundaryState> {
  state: SceneBoundaryState = { hasError: false }

  static getDerivedStateFromError(): SceneBoundaryState {
    return { hasError: true }
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children
  }
}

function PortraitVideoFallback({ onVideoReady }: PortfolioSceneProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    onVideoReady?.(videoRef.current)
    return () => onVideoReady?.(null)
  }, [onVideoReady])

  return (
    <div className="scene-fallback">
      <video ref={videoRef} src="/portfolio-motion.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="Hussain working at a laptop" />
    </div>
  )
}

type PortfolioSceneProps = {
  onVideoReady?: (video: HTMLVideoElement | null) => void
}

function VideoDisplay({ onVideoReady }: PortfolioSceneProps) {
  const group = useRef<Group>(null)
  const texture = useVideoTexture('/portfolio-motion.mp4', {
    crossOrigin: 'anonymous',
    muted: true,
    loop: true,
    playsInline: true,
  })

  useEffect(() => {
    texture.colorSpace = SRGBColorSpace
    onVideoReady?.(texture.image as HTMLVideoElement)
    return () => onVideoReady?.(null)
  }, [onVideoReady, texture])

  useFrame(({ pointer }, delta) => {
    if (!group.current) return
    group.current.rotation.y += (pointer.x * 0.12 - group.current.rotation.y) * Math.min(delta * 2, 1)
    group.current.rotation.x += (-pointer.y * 0.08 - group.current.rotation.x) * Math.min(delta * 2, 1)
  })

  return (
    <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.18}>
      <group ref={group}>
        <RoundedBox args={[4.52, 2.78, 0.22]} radius={0.16} smoothness={5}>
          <meshPhysicalMaterial color="#20170f" metalness={0.7} roughness={0.24} clearcoat={0.8} />
        </RoundedBox>
        <RoundedBox args={[4.36, 2.62, 0.05]} radius={0.12} smoothness={5} position={[0, 0, 0.12]}>
          <meshBasicMaterial color="#080706" />
        </RoundedBox>
        <mesh position={[0, 0.015, 0.155]}>
          <planeGeometry args={[4.16, 2.34]} />
          <meshBasicMaterial map={texture as VideoTexture} toneMapped={false} />
        </mesh>
        <mesh position={[0, -1.315, 0.16]}>
          <boxGeometry args={[0.5, 0.045, 0.025]} />
          <meshStandardMaterial color="#9b7348" metalness={0.8} roughness={0.24} />
        </mesh>
        <mesh position={[0, 0, -0.24]}>
          <torusGeometry args={[2.82, 0.012, 8, 120]} />
          <meshBasicMaterial color="#d6a15f" transparent opacity={0.42} />
        </mesh>
      </group>
    </Float>
  )
}

function OrbitingElements() {
  const group = useRef<Group>(null)
  const positions = useMemo(() => new Float32Array([
    -3.2, 1.8, -0.7, 2.9, 1.55, -0.5, -3.4, -1.6, -0.8,
    3.25, -1.55, -0.6, -2.3, 2.45, -1.1, 2.2, -2.4, -0.9,
    0, 2.8, -1.2, 0.3, -2.75, -1.1,
  ]), [])

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z += delta * 0.025
  })

  return (
    <group ref={group}>
      {Array.from({ length: positions.length / 3 }, (_, index) => (
        <mesh key={index} position={[positions[index * 3], positions[index * 3 + 1], positions[index * 3 + 2]]}>
          <icosahedronGeometry args={[index % 3 === 0 ? 0.08 : 0.045, 1]} />
          <meshStandardMaterial color={index % 2 === 0 ? '#e3b46f' : '#9a6943'} emissive="#6e4321" emissiveIntensity={0.35} roughness={0.35} metalness={0.45} />
        </mesh>
      ))}
    </group>
  )
}

export function PortfolioScene({ onVideoReady }: PortfolioSceneProps) {
  const fallback = <PortraitVideoFallback onVideoReady={onVideoReady} />

  return (
    <SceneBoundary fallback={fallback}>
      <Canvas
        aria-hidden="true"
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8.7], fov: 34 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        fallback={fallback}
      >
        <ambientLight intensity={1.35} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} color="#ffe1ad" />
        <pointLight position={[-4, -1, 2]} intensity={2.4} color="#bd7f43" />
        <Suspense fallback={null}>
          <VideoDisplay onVideoReady={onVideoReady} />
          <OrbitingElements />
        </Suspense>
      </Canvas>
    </SceneBoundary>
  )
}
