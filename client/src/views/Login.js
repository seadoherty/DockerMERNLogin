import React, { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import apis from '../api/api'
import Input from '../components/Input';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
    const { setLogged } = useContext(UserContext);
    const history = useHistory();

    const initialLogin = {
        email: "",
        password: ""
    }

    const [log, setLog] = useState(initialLogin);
    const [errors] = useState(initialLogin);

    const handleInputChange = e => {
        setLog({
            ...log,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        apis.logIn(log)
            .then(res => {
                console.log(res);
                if (res.data.user) {
                    setLogged(res.data.user);
                    history.push("/dashboard");
                }
                else {
                    console.log(res.data);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit} className="col-5 mx-auto">
            <h2>Login</h2>
            <Input
                name="email"
                value={log.email}
                error={errors.email}
                handleChange={handleInputChange}
                label="Email:"
                type="email"
            />
            <Input
                name="password"
                value={log.password}
                error={errors.password}
                handleChange={handleInputChange}
                label="Password:"
                type="password"
            />
            <Input
                submitValue="Login"
                type="submit"
            />
            <br />
            <Link to="/">Don't have an account?</Link>
        </form>
    )
}

export default Login;
