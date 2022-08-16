import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

import Table from '../components/table'
import { GetUsers, GetUsersFromPostMan, checkForDuplicateEntry } from '../utils/apiUtils'



export default function Home() {
  const [InternalData, setInternalData] = useState(false)
  const [DataFromPostMan, setDataFromPostMan] = useState(false)

  checkForDuplicateEntry()

  useEffect(() => {
    const getData = async () => {
      let { Data } = await GetUsers(setInternalData)
    }
    const getDataFromPostMan = async () => {
      let { Data } = await GetUsersFromPostMan(setDataFromPostMan)
    }

    getDataFromPostMan()
    getData()

  }, [])





  return (
    <div className={styles.mainContainer}>
      <h2>CopyAndSaveContacts 5.0</h2>
      <Table Data={DataFromPostMan} setData={setDataFromPostMan} setDataInternal={setInternalData} Internal={false} />

      <Table Data={InternalData} setData={setInternalData} Internal={true} />

    </div>
  )
}
