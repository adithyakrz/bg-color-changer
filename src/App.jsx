import { useState , useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [red, setRed] = useState(255)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(100)

  const rgbColor = `rgb(${red}, ${green}, ${blue})`;

  useEffect(() => {
    document.body.style.transition = 'background-color 500m ease';
    document.body.style.backgroundColor = rgbColor;
  }, [red, green, blue])

const rgbRef =useRef(null)

const copyToClipboard = () => {
  window.navigator.clipboard.writeText(rgbColor)
  rgbRef.current?.select()
}

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
    <div className="card w-full max-w-lg bg-base-100 shadow-2xl p-8 space-y-6">
      <h2 className="text-3xl font-bold text-center">RGB Color Picker</h2>


      <div className="space-y-4">
        <div>
          <label className="flex justify-between mb-1 text-red-500 font-semibold">
            <span>Red</span><span>{red}</span>
          </label>
          <input
            type="range"
            min="0"
            max="255"
            value={red}
            onChange={(e) => setRed(Number(e.target.value))}
            className="range range-error"
          />
        </div>
  
        <div>
          <label className="flex justify-between mb-1 text-green-500 font-semibold">
            <span>Green</span><span>{green}</span>
          </label>
          <input
            type="range"
            min="0"
            max="255"
            value={green}
            onChange={(e) => setGreen(Number(e.target.value))}
            className="range range-success"
          />
        </div>
  
        <div>
          <label className="flex justify-between mb-1 text-blue-500 font-semibold">
            <span>Blue</span><span>{blue}</span>
          </label>
          <input
            type="range"
            min="0"
            max="255"
            value={blue}
            onChange={(e) => setBlue(Number(e.target.value))}
            className="range range-info"
          />
        </div>
      </div>
  
      
      <div className="h-20 rounded-xl border border-neutral shadow-inner" style={{ backgroundColor: rgbColor }}></div>
  
      
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={rgbColor}
          readOnly
          ref={rgbRef}
          className="input input-bordered input-md w-full text-center font-mono"
        />
        <button
          className="btn btn-primary"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default App
