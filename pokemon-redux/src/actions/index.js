import axios from 'axios'

export const LOGIN = 'LOGIN',
    GOTTEN = 'GOTTEN'

export const login = creds => dispatch => {

    axios
        .post('https://reqres.in/api/users', creds)
        .then(res => dispatch({ type: LOGIN, payload: res.data }))
        .catch(err => console.error(err))

}

export const getPokemon = _ => dispatch => {

    axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then(res => dispatch({ type: GOTTEN, payload: res.data.results }))
        .catch(err => console.error(err))

}
