import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
</div>
)
}

const Message = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Larisa' id='1'/>
                <DialogItem name='Dmitriy' id='2'/>
                <DialogItem name='Alex' id='3'/>
                <DialogItem name='Anya' id='4'/>
                <DialogItem name='Ira' id='5'/>
                <DialogItem name='Tanya' id='6'/>
                <DialogItem name='Julia' id='7'/>
            </div>
            <div className={s.messages}>
                <Message message='yo'/>
            </div>
        </div>
    )
}

export default Dialogs;