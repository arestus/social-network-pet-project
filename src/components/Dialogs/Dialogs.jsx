import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";

const Dialogs = (props) => {

    const state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)

    const newMessageElement = React.createRef()

    const addMessage = () => {
        props.addMessage()
    }

    const onMessageChange = () => {
        const text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea ref={newMessageElement} value={props.newMessageText} onChange={onMessageChange}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;