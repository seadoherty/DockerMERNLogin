import React, { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import apis from '../api/api'
import Input from '../components/Input';
import { Link, useHistory } from 'react-router-dom';

const Reg = () => {
    const { setLogged } = useContext(UserContext);
    const history = useHistory();

    const initialReg = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [reg, setReg] = useState(initialReg);
    const [errors, setErrors] = useState(initialReg);

    const handleInputChange = e => {
        setReg({
            ...reg,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        apis.addUser(reg)
            .then(res => {
                console.log(res);
                if (res.data.user) {
                    setLogged(res.data.user);
                    history.push("/dashboard");
                }
                else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <Input
                name="firstName"
                value={reg.firstName}
                error={errors.firstName}
                handleChange={handleInputChange}
                label="First Name:"
                type="text"
            />
            <Input
                name="lastName"
                value={reg.lastName}
                error={errors.lastName}
                handleChange={handleInputChange}
                label="Last Name:"
                type="text"
            />
            <Input
                name="email"
                value={reg.email}
                error={errors.email}
                handleChange={handleInputChange}
                label="Email:"
                type="email"
            />
            <Input
                name="password"
                value={reg.password}
                error={errors.password}
                handleChange={handleInputChange}
                label="Pwd:"
                type="password"
            />
            <Input
                name="confirmPassword"
                value={reg.confirmPassword}
                error={errors.confirmPassword}
                handleChange={handleInputChange}
                label="Confirm Pwd:"
                type="password"
            />
            <Input
                submitValue="Register"
                type="submit"
            />
            <br />
            <Link to="/login">Already have an account?</Link>
        </form>
    )
}

export default Reg;
