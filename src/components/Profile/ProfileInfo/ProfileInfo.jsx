import React from 'react'
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    width="100%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhTwG1pAsM7aVwK9UFTawSwxKur9m6SlRRQ&usqp=CAU"
                    alt="funny cat with remote controller"
                />
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;