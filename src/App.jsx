import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Card} from './Molecules/Card'
import {Cars} from './Molecules/Particles/Atoms/info'
import {AppCont} from './Molecules/Particles/Atoms/containers'

function App() {

  return (
    <AppCont>
      {
        Cars.map((car, i) => <Card index={i + 1} bgcolor={car.bgcolor} text={car.text} title={car.title}></Card>)
      }
    </AppCont>
  )
}

export default App
