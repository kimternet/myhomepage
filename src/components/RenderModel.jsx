"use client"

import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, {Suspense} from 'react'

const RenderModel = ({children, className}) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      dpr={[1, 1.5]}
      gl={{ 
        antialias: true,
        powerPreference: 'high-performance'
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 6]
      }}
    >
        <Suspense fallback={null}>
            {children}
        </Suspense>
        <Environment preset='dawn' />
    </Canvas>
  )
}

export default RenderModel
