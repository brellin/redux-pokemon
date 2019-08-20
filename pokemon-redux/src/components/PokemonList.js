import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Pokemon from './Pokemon'
import { getPokemon } from '../actions'

const PokemonList = props => {

    useEffect(_ => props.getPokemon(), [])

    console.log('listprops', props)

    if (props.pokemon.length) return props.pokemon.map(poke => <Pokemon name={poke.name} />)

    return <h1>Somejuan</h1>

}

const mapStateToProps = state => ({
    pokemon: state.pokemon
})

export default connect(mapStateToProps, { getPokemon })(PokemonList)
