import React from 'react'
import { connect } from 'react-redux'

import PokemonList from './components/PokemonList'
import Login from './components/Login'
import './App.css'

function App(props) {

  if (props.loggedIn) return <div className="App">
    <header>
      <h1>Pokemon</h1>
      <PokemonList />
    </header>
  </div>

  return <div className="App">
    <header>
      <h1>Pokemon</h1>
      <Login />
    </header>
  </div>

}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(App)
