import { deleteUser } from '../utils/apiUtils'



export default function DeleteUser({ idOfUser, setData }) {


    const DeleteUser = () => {
        deleteUser(idOfUser, setData)
    }


    return (
        <th><button onClick={DeleteUser}>Delete</button></th>
    )






}
