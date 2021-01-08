import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import apis from '../api/api'
import { useHistory } from 'react-router-dom';

const Main = () => {
    const { logged } = useContext(UserContext);
    const [users, setUsers] = useState([]);
    const history = useHistory();


    useEffect(() => {
        apis.getAllUsers()
            .then(res => setUsers(res.data.results))
            .catch(err => {
                if (err.response.status === 401) {
                    history.push('/login');
                }
            });
    }, [])

    const handleLogout = () => {
        apis.logOut()
            .then(res => history.push('/'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Welcome {logged.firstName} {logged.lastName}</h2>
            <button onClick={handleLogout} className="generalInput">Log Out</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, i) => {
                            return <tr key={i}>
                                <td>{u.firstName} {u.lastName}</td>
                                <td>{u.email}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Main;