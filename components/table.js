import styles from '../styles/Table.module.css'

import Row from './row'
import Loader from './loader'
import AddNewUser from './addNewUser'


export default function Table({ Data, setData, Internal, setDataInternal }) {


    !Internal ? Data = Data.data : null


    if (Data) {
        return (
            <div className={styles.TableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
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

    } else {
        return (
            <Loader />
        )
    }
}


