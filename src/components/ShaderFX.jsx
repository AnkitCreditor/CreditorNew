// ShaderFX.jsx
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

const ShaderFX = () => {
  const shaderRef = useRef()
  return (
    <Canvas>
      {/* You can plug in postprocessing or shaderMaterial here */}
      <ambientLight />
      <mesh ref={shaderRef}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color={'#4895e4'} />
      </mesh>
    </Canvas>
  )
}

export default ShaderFX
