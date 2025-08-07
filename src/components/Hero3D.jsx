import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

const Hero3D = () => (
  <div style={{ height: '100vh', width: '100%' }}>
    <Canvas>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
      <Stars />
      <OrbitControls enableZoom={false} />
    </Canvas>
  </div>
)

export default Hero3D
