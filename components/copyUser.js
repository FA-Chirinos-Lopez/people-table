import { checkForDuplicateEntry, submitUser } from "../utils/apiUtils"



export default function CopyUser({ newUserName, newUserEmail, setData }) {

    //copy external entry to internal api and check if its duplicated

    const copyUser = async () => {
        let repeated = await checkForDuplicateEntry(newUserName, newUserEmail)
        if (!repeated) {
            submitUser({ "name": newUserName, "email": newUserEmail, "setData": setData })
        }

    }


    return (
        <th><button onClick={copyUser}>Copy</button></th>
    )






}
