import React, { useState } from 'react'
import { connect } from 'react-redux'

import { login } from '../actions'

const Login = (props) => {

    // console.log('login props', props)

    const [creds, setCreds] = useState({
        user: '',
        pass: ''
    })

    const handleChanges = e => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    return (

        <form onSubmit={(e) => {
            e.preventDefault()
            props.login(creds)
        }}>
            <input type="text" name='user' onChange={handleChanges} />
            <input type="password" name='pass' onChange={handleChanges} />
            <button>Login</button>
        </form>

    )

}

const mapStateToProps = state => ({
    loggedIn: state.loggedIn
})

export default connect(mapStateToProps, { login })(Login)
