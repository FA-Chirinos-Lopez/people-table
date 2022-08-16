import { useRef, useState } from 'react'
import styles from '../styles/Table.module.css'

import Row from './row'
import AddNewUser from './addNewUser'


export default function Table({ Data, setData, Internal, setDataInternal }) {
    //Change button text
    const [sortingWay, setSortingWay] = useState("sort")

    //Keep status during lifecycle
    const sorted = useRef(false)

    const sortedAscending = useRef(false)


    //Sort button func
    const sortArrayByName = () => {
        sorted.current = true

        if (sortedAscending.current) {
            setSortingWay("descending")
            sortedAscending.current = false
            setData([...Data].sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase())))


        } else {
            setSortingWay("ascending")
            sortedAscending.current = true
            setData([...Data].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))

        }


    }

    sorted.current ? sortArrayByName : null

    return (
        <div className={styles.TableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th><button onClick={sortArrayByName}>{sortingWay}</button></th>
                    </tr>
                </thead>
                <tbody>
                    {Internal ?
                        Data.map((user) => (

                            <Row key={user.id}
                                idOfUser={user.id}
                                avatarImage={`https://picsum.photos/id/${user.imageId}/200/`}
                                nameOfUser={user.name}
                                emailOfUser={user.email}
                                setData={setData}
                                internal={Internal}
                            />
                        )) :
                        Data.map((user) => (

                            <Row key={user.id}
                                idOfUser={user.id}
                                avatarImage={`https://picsum.photos/id/${user.id}/200/`}
                                nameOfUser={user.name}
                                emailOfUser={user.email}
                                setData={setData}
                                internal={Internal}
                                setDataInternal={setDataInternal}
                            />
                        ))}

                </tbody>
            </table>

            {Internal ? <AddNewUser setData={setData} /> : null}

        </div>
    )


}


