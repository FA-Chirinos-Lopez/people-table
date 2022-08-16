import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/row.module.css'
import { deleteUser } from '../utils/apiUtils'
import CopyUser from './copyUser'
import DeleteUser from './deleteUser'
import fImg from '../public/fallbackAvatar.png'


export default function Row({ idOfUser, avatarImage, nameOfUser, emailOfUser, setData, internal, setDataInternal }) {

    //variable created in case of image src error is going to fallback with a internal saved placeholder picture
    const [image, setImage] = useState(avatarImage)


    return (
        <tr className={styles.row}>
            <th>   {avatarImage ?
                <Image
                    className={styles.imgBubble}
                    src={image}
                    alt="Avatar"
                    width={70}
                    height={70}
                    onError={() => {
                        setImage(fImg);
                    }}

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
