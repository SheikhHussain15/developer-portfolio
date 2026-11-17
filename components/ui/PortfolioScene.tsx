'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox, useVideoTexture } from '@react-three/drei'
import { Suspense, useEffect, useMemo, useRef } from 'react'
import { Group, SRGBColorSpace, VideoTexture } from 'three'

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
  return (
    <Canvas
      aria-hidden="true"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8.7], fov: 34 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      fallback={<div className="scene-fallback">Enable WebGL to view the 3D portrait.</div>}
    >
      <ambientLight intensity={1.35} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} color="#ffe1ad" />
      <pointLight position={[-4, -1, 2]} intensity={2.4} color="#bd7f43" />
      <Suspense fallback={null}>
        <VideoDisplay onVideoReady={onVideoReady} />
        <OrbitingElements />
      </Suspense>
    </Canvas>
  )
}
