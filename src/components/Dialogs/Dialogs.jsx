import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Larisa'},
        {id: 2, name: 'Dmitriy'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Anya'},
        {id: 5, name: 'Ira'},
        {id: 6, name: 'Tanya'},
        {id: 7, name: 'Julia'}
    ]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messages = [
        {id: 1, message: 'hi!'},
        {id: 2, message: 'how are you?'},
        {id: 3, message: 'where are you?'},
        {id: 4, message: 'my name is'},
        {id: 5, message: 'some of them'},
        {id: 6, message: 'good'},
        {id: 7, message: 'got it'}
    ]

    let messagesElements = messages.map(m =>  <Message message={m.message}/>)



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;