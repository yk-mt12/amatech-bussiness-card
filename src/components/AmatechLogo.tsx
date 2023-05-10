/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 amatech.glb --types --shadows
*/

import * as THREE from 'three'
import React, { VFC, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

const ModelPath = '/images/amatech.glb'

type GLTFResult = GLTF & {
  nodes: {
    Sphere: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export const Model: VFC<JSX.IntrinsicElements['group']> = props => {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(ModelPath) as GLTFResult

  
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.001']}
        position={[-2, 2, 0]}
        rotation={[0, 0, -0.38]}
        scale={[1.39, 1, 1]}
      />
    </group>
  )
}

useGLTF.preload(ModelPath)
