import { users } from '../../../data/users'
import { getUserIndex } from '../../../utils/apiUtils'




export default async function handler(req, res) {
    // get id from params
    const { userId } = req.query

    //get method for individual
    if (req.method === 'GET') {
        const user = users.find(user => user.id === parseInt(userId))
        res.status(200).json(user)

        //Delete method individual
    } else if (req.method === 'DELETE') {

        // find user index by id and delete it
        let index = users.findIndex(
            user => user.id === parseInt(userId)
        )

        const deletedUser = users.find(
            user => user.id === parseInt(userId)
        )


        users.splice(index, 1)

        res.status(200).json(deletedUser)



    }
}

