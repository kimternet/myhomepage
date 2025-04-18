/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: lhaegy.fu (https://sketchfab.com/lhaegy.fu)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/wooden-bird-house-5789d05e7eea41a9b66f4d070fc8fb45
Title: Wooden Bird House
*/

"use client"
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function BirdHouse(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/wooden_bird_house.glb')
  const { actions } = useAnimations(animations, group)
  
  // 살짝 흔들리는 효과 추가
  useFrame((state) => {
    // 매우 작은 범위로 위아래로 미세하게 흔들림
    group.current.position.y = -1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    // 좌우로도 아주 미세하게 흔들림
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    // 살짝 좌우로 회전하는 효과 (y축 회전)
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
  })
  
  return (
    <group 
      ref={group} 
      {...props} 
      dispose={null} 
      position={[0, -1, 0]}
      scale={0.21}
      rotation={[0, 0, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.003}>
          <group name="3084781cdbe247edb5257d767e5f7f91fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Pine_2_LOD0006"
                  position={[-273.262, 2647.145, 102.731]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="0"
                    castShadow
                    receiveShadow
                    geometry={nodes['0'].geometry}
                    material={materials.Cluster_1_Branch_Mat}
                    morphTargetDictionary={nodes['0'].morphTargetDictionary}
                    morphTargetInfluences={nodes['0'].morphTargetInfluences}
                  />
                  <mesh
                    name="1"
                    castShadow
                    receiveShadow
                    geometry={nodes['1'].geometry}
                    material={materials.Bark_Branch_Mat}
                    morphTargetDictionary={nodes['1'].morphTargetDictionary}
                    morphTargetInfluences={nodes['1'].morphTargetInfluences}
                  />
                  <mesh
                    name="2"
                    castShadow
                    receiveShadow
                    geometry={nodes['2'].geometry}
                    material={materials.Cluster_2_Leaf_Mat}
                    morphTargetDictionary={nodes['2'].morphTargetDictionary}
                    morphTargetInfluences={nodes['2'].morphTargetInfluences}
                  />
                </group>
                <group
                  name="NurbsPath"
                  position={[656.552, 485.964, 647.401]}
                  rotation={[-1.551, -0.001, -0.107]}
                  scale={100}>
                  <mesh
                    name="NurbsPath_Rope_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.NurbsPath_Rope_0.geometry}
                    material={materials.Rope}
                  />
                  <group name="Bird_House" position={[0.041, -0.015, -5.818]}>
                    <mesh
                      name="Bird_House_Bird_House_1024_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Bird_House_Bird_House_1024_0.geometry}
                      material={materials.Bird_House_1024}
                    />
                  </group>
                  <group name="BezierCircle" position={[0.047, -0.024, -3.513]}>
                    <mesh
                      name="BezierCircle_Rope_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.BezierCircle_Rope_0.geometry}
                      material={materials.Rope}
                    />
                  </group>
                  <group name="BezierCircle001" position={[0.047, -0.024, -3.513]}>
                    <mesh
                      name="BezierCircle001_Rope_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.BezierCircle001_Rope_0.geometry}
                      material={materials.Rope}
                    />
                  </group>
                  <group name="BezierCircle003" position={[-0.005, -0.024, 0.061]} scale={1.093}>
                    <mesh
                      name="BezierCircle003_Rope_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.BezierCircle003_Rope_0.geometry}
                      material={materials.Rope}
                    />
                  </group>
                  <group name="BezierCircle002" position={[-0.001, -0.006, 0.067]} scale={0.952}>
                    <mesh
                      name="BezierCircle002_Rope_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.BezierCircle002_Rope_0.geometry}
                      material={materials.Rope}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/wooden_bird_house.glb') 