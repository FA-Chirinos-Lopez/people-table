import Image from 'next/image'
import styles from '../styles/row.module.css'
import { deleteUser } from '../utils/apiUtils'
import CopyUser from './copyUser'
import DeleteUser from './deleteUser'



export default function Row({ idOfUser, avatarImage, nameOfUser, emailOfUser, setData, internal, setDataInternal }) {



    return (
        <tr className={styles.row}>
            <th>   {avatarImage ?
                <Image
                    className={styles.imgBubble}
                    src={avatarImage}
                    alt="Avatar"
                    width={70}
                    height={70}
                /> : "Please add user image"}</th>

            <th>{nameOfUser ? nameOfUser : "Please add user name"}</th>
            <th>{emailOfUser ? emailOfUser : "Please add user email"}</th>

            {internal ?
                <DeleteUser idOfUser={idOfUser} setData={setData} />
                :
                <CopyUser newUserName={nameOfUser} newUserEmail={emailOfUser} setData={setDataInternal} />}
        </tr>
    )






}
