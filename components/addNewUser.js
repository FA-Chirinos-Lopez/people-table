import { useState } from 'react'
import { submitUser, checkForDuplicateEntry } from '../utils/apiUtils'
import styles from '../styles/row.module.css'


export default function AddNewUser({ setData }) {
    // create variables to store the input
    const [newUserName, setNewUserName] = useState('')
    const [newUserEmail, setNewUserEmail] = useState('')

    const addButton = async () => {
        //send new value to database but check before sendind entry
        let repeated = await checkForDuplicateEntry(newUserName, newUserEmail)
        if (!repeated) {
            submitUser({ "name": newUserName, "email": newUserEmail, "setData": setData })
        }
    }



    return (
        <div className={styles.inputAndButtonContainer}>
            <div className={styles.inputContainer}>

                <input
                    type='text'
                    value={newUserName}
                    placeholder="Name"
                    onChange={e => setNewUserName(e.target.value)}
                />
                <input
                    type='text'
                    value={newUserEmail}
                    placeholder="Email"
                    onChange={e => setNewUserEmail(e.target.value)}
                />
            </div>
            <button className={styles.addButton} onClick={addButton}>Add</button>
        </div>
    )
}
