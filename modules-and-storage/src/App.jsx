import React from 'react'
import './App.css'
import Argos from './components/Argos/Argos'
import Cosmetics from './components/Cosmetics/Cosmetics'
import HandlerParameter from './components/EventHandler/HandlerParameter'
import Persons from './components/Persons/Persons'
import Products from './components/Products/Products'

function App() {

  return (
    <div className="App">
      {/* 49-5-2 Modules, import default, relative path */}
        {/* <Products /> */}

      {/* 49-5-3 Fake data (JSON) generator */}
      {/* <Persons /> */}

      {/* 49-5-4 How to create Event Handler with parameter */}
      {/* <HandlerParameter /> */}

      {/* 49-5-5 Intro to local storage to store data just one time */}
      {/* <Cosmetics /> */}

      {/* 49-5-6 */}
      <Argos />

    </div>
  )
}

export default App
