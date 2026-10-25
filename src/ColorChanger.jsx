import { useState } from 'react'

function ColorChanger() {
  const [color, setColor] = useState('#ffffff')

  const handleColorChange = (event) => {
    setColor(event.target.value)
  }

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: '100vh',
        padding: '30px 20px',
        textAlign: 'center',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          margin: '70px auto',
          padding: '40px 25px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
        }}
      >
        <h1
          style={{
            color: '#312e81',
            fontSize: '32px',
            marginBottom: '20px',
          }}
        >
          Background Color Changer
        </h1>

        <p style={{ color: '#475569', marginBottom: '25px' }}>
          Select a color to change the background of the webpage.
        </p>

        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          aria-label="Select background color"
          style={{
            width: '100px',
            height: '65px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: 'transparent',
          }}
        />

        <p
          style={{
            marginTop: '25px',
            color: '#1e293b',
            fontSize: '18px',
            fontWeight: '600',
          }}
        >
          Selected Color: {color}
        </p>

        <button
          onClick={() => setColor('#ffffff')}
          style={{
            marginTop: '15px',
            padding: '12px 24px',
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '600',
          }}
        >
          Reset Color
        </button>
      </div>
    </div>
  )
}

export default ColorChanger