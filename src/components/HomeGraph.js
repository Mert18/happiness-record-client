import React, { useState, useEffect } from 'react'
import '../styles/components.css'
import randomColor from 'randomcolor'

const HomeGraph = () => {
  const [color1, setColor1] = useState('black')
  const [color2, setColor2] = useState('yellow')
  const [color3, setColor3] = useState('green')
  const [color4, setColor4] = useState('red')

  useEffect(() => {
    setTimeout(() => {
      setColor1(randomColor())
      setColor2(randomColor())
      setColor3(randomColor())
      setColor4(randomColor())
    }, 2000)
  }, [color1])
  return (
    <div className="homegraph">
      <svg viewBox="0 0 1280 360">
        <g stroke="black" strokeWidth="2" strokeOpacity="20%">
          <line x1="166.5" x2="166.5" y2="360" />
        </g>
        <g stroke="black" strokeWidth="2" strokeOpacity="20%">
          <line x1="326.5" x2="326.5" y2="360" />
        </g>
        <g stroke="black" strokeWidth="2" strokeOpacity="20%">
          <line x1="486.5" x2="486.5" y2="360" />
        </g>
        <g stroke="black" strokeWidth="2" strokeOpacity="20%">
          <line x1="646.5" x2="646.5" y2="360" />
        </g>
        <g stroke="black" strokeWidth="2" strokeOpacity="20%">
          <line x1="806.5" x2="806.5" y2="360" />
        </g>
        <g stroke="black" strokeWidth="2" strokeOpacity="20%">
          <line x1="966.5" x2="966.5" y2="360" />
        </g>
        <g stroke="black" strokeWidth="2" strokeOpacity="20%">
          <line x1="1126.5" x2="1126.5" y2="360" />
        </g>
        <polyline
          fill="none"
          stroke={color1}
          strokeWidth="3"
          points="0.5 190.5 166.5 89.5 326.5 121.5 486.5 121.5 646.5 61.5 806.5 190.5 966.5 244.5 1126.5 203.5 1280.5 81.5"
        />
        <polyline
          fill="none"
          stroke={color2}
          strokeWidth="3"
          points="0.5 75.5 166.5 231.5 326.5 202.5 486.5 226.5 646.5 288.5 806.5 258.5 966.5 142.5 1126.5 152.5 1280.5 206.5"
        />
        <polyline
          fill="none"
          stroke={color3}
          strokeWidth="3"
          points="0.5 279.5 166.5 257.5 326.5 298.5 486.5 329.5 646.5 311.5 806.5 329.5 966.5 312.5 1126.5 344.5 1280.5 270.5"
        />
        <polyline
          fill="none"
          stroke={color4}
          strokeWidth="3"
          points="0.5 28.5 166.5 166.5 326.5 161.5 486.5 61.5 646.5 28.5 806.5 69.5 966.5 97.5 1126.5 41.5 1280.5 44.5"
        />
      </svg>
    </div>
  )
}

export default HomeGraph
