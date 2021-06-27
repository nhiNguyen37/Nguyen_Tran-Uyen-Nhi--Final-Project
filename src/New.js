import { useState } from "react";

function New(props) {
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const saveUsersToList = function(e) {
        if(e.key==="Enter" && name && password) {
            props.addUsers({ username: name, password: password});
            setUsername('');
            setPassword('');
        }
    }

    return (
            <section>
                <h3>New Users</h3>
                <ul>
                    <li><input type="text" placeholder="Username" onKeyDown={e => saveUsersToList(e)} onChange={v => setUsername(v.target.value)} value={name} /></li>
                    <li><input type="text" placeholder="Password" onKeyDown={e => saveUsersToList(e)} onChange={v => setPassword(v.target.value)} value={password} /></li>
                </ul>
            </section>
    )
}

export default New;
