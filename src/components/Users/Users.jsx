import React from 'react'
import s from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oAlf6eD-4mrGrbTaWeg2Ec17AhQLgfuYBQ&usqp=CAU',
                fullName: 'Ania',
                followed: true,
                status: 'mom',
                location: {city: "Kharkiv", country: "Ukraine"}
            },
            {
                id: 2,
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oAlf6eD-4mrGrbTaWeg2Ec17AhQLgfuYBQ&usqp=CAU',
                fullName: 'Larisa',
                followed: false,
                status: 'team-lead',
                location: {city: "Kyiv", country: "Ukraine"}
            },
            {
                id: 3,
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oAlf6eD-4mrGrbTaWeg2Ec17AhQLgfuYBQ&usqp=CAU',
                fullName: 'Dima',
                followed: true,
                status: 'fisher',
                location: {city: "Kyiv", country: "Ukraine"}
            },
            {
                id: 4,
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oAlf6eD-4mrGrbTaWeg2Ec17AhQLgfuYBQ&usqp=CAU',
                fullName: 'Alex',
                followed: false,
                status: 'undefined',
                location: {city: "Poltava", country: "Ukraine"}
            }]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.imgUrl} alt='ava' className={s.userImg}/>
                    </div>
                </span>
                <span>
                    <div>
                        {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)
        }
    </div>

}

export default Users;