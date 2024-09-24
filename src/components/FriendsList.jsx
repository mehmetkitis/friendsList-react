import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function FriendsList() {
    const { authInfo } = useContext(AuthContext);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axios
            .get('https://nextgen-project.onrender.com/api/s11d2/friends', {
                headers: {
                    Authorization: authInfo.token,
                },
            })
            .then((res) => setFriends(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="friendListDiv">
            <h1 >FRIENDS LIST</h1>
            {friends.map((friend, key) => (
                <div className="friendList" key={key}>
                    -{friend.name}-{friend.email}
                </div>
            ))}
        </div>
    );
}
