const INTERNAL_API_URL = process.env.NEXT_PUBLIC_INTERNAL_API_URL
const EXTERNAL_API_URL = process.env.NEXT_PUBLIC_EXTERNAL_API_URL


const GetUsers = async (setData) => {
    try {
        const res = await fetch(INTERNAL_API_URL)
        const data = await res.json()
        setData(data)

        return { Data: data }

    } catch (err) {

        console.log('error', err);
        setData([])
        return { Data: [] }
    }


}

const GetUsersFromPostMan = async (setData) => {
    const res = await fetch(EXTERNAL_API_URL)
    const data = await res.json()
    setData(data)
    return { Data: data }
}

const submitUser = async ({ name, email, setData }) => {

    const res = await fetch(INTERNAL_API_URL, {
        method: 'POST',
        body: JSON.stringify({ name, email }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json()

    GetUsers(setData)
}




const deleteUser = async (userId, setData) => {
    const res = await fetch(`${INTERNAL_API_URL}${userId}`, {
        method: 'DELETE'
    })

    GetUsers(setData)
}


const getRandomNumber = (maxLimit = 200) => {
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);

    return rand;
}

const checkForDuplicateEntry = async (name, email) => {

    let repeated = false

    const res = await fetch(INTERNAL_API_URL)
    const data = await res.json()

    if (data.length >= 1) {

        data.forEach(e => {
            if (e.name == name && e.email == email) {
                repeated = true
                alert("You can not repeat!!");
            }
        });
    }




    return repeated
}


export { GetUsers, GetUsersFromPostMan, submitUser, deleteUser, getRandomNumber, checkForDuplicateEntry }