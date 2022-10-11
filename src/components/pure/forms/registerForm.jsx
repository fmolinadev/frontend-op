import { useState } from 'react'


const RegisterForm = props => {

    const initialRegisterState = [
        {

            name: "",
            email: "",
            password: ""
        }
    ]

    const [userRegister, setUserRegister] = useState(initialRegisterState)

    return (
        <div>registerForm</div>
    )
}

export default RegisterForm
