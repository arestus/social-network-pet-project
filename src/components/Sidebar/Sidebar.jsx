import React from 'react'
import FriendItem from "./FriendItem/FriendItem";


const Sidebar = ({friends}) => {

    const friendsList = friends.map(f => <FriendItem name={f.name} id={f.id}/>)

    return (
        <div>
            {friendsList}
        </div>
    )
}

export default Sidebar;