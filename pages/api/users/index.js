// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { users } from "../../../data/users"
import { getRandomNumber } from "../../../utils/apiUtils"



export default function handler(req, res) {


  //send users array
  if (req.method === "GET") {

    res.status(200).json(users)
    //POST to users array
  } else if (req.method === 'POST') {


    const name = req.body.name
    const email = req.body.email
    const imageId = getRandomNumber()


    const newUser = {
      id: Date.now(),
      imageId: imageId,
      name: name,
      email: email
    }

    users.push(newUser)
    res.status(201).json(newUser)


  }


}


