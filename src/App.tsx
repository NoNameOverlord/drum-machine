import { useState } from 'react'
import Die from "./Die.tsx"
import './App.css'

function App() {

  const [soundName, setSoundName] = useState("")
  


  return (
    <>
      <div id="drum-machine">
        <div id="display" >{soundName}</div>
        <div>
            <Die id="Heater 1" src="./Heater-1.mp3" value="Q" setSoundName={setSoundName}/>
            <Die id="Heater 2" src="./Heater-2.mp3" value="W" setSoundName={setSoundName}/>
            <Die id="Heater 3" src="./Heater-3.mp3" value="E" setSoundName={setSoundName}/>
            <Die id="Heater 4" src="./Heater-4_1.mp3" value="A" setSoundName={setSoundName}/>
            <Die id="Clap" src="./Heater-6.mp3" value="S" setSoundName={setSoundName}/>
            <Die id="Open HH" src="./Dsc_Oh.mp3" value="D" setSoundName={setSoundName}/>
            <Die id="Kick n' Hat" src="./Kick_n_Hat.mp3" value="Z" setSoundName={setSoundName}/>
            <Die id="Kick" src="./RP4_KICK_1.mp3" value="X" setSoundName={setSoundName}/>
            <Die id="Closed HH" src="./Cev_H2.mp3" value="C" setSoundName={setSoundName}/>
        </div>
      </div>
    </>
  )
}

export default App
