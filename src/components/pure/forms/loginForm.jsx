import { useState } from 'react'


const LoginForm = props => {

    const initialLoginState = [
        {
            user: "",
            password: ""
        }
    ]

    const [userLogin, setUserLogin] = useState(initialLoginState)

    return (
        <div>loginForm</div>
    )
}



export default LoginForm