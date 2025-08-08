// TiltSection.jsx
import Tilt from 'react-parallax-tilt'

const TiltSection = () => (
  <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000}>
    <div style={{
      padding: '60px',
      background: '#111',
      color: '#fff',
      borderRadius: '12px',
      textAlign: 'center',
    }}>
      <h2 className="gradient-text">Mobile Tilt Magic</h2>
      <p>Parallax effect based on mobile orientation or mouse tilt</p>
    </div>
  </Tilt>
)

export default TiltSection
