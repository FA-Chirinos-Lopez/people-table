import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'

import Table from '../components/table'
import { GetUsers, GetUsersFromPostMan } from '../utils/apiUtils'
import Loader from '../components/loader'



export default function Home() {


  const isLoadingExternal = useRef(true)
  const isLoadingInternal = useRef(true)


  const [InternalData, setInternalData] = useState(false)
  const [DataFromPostMan, setDataFromPostMan] = useState(false)




  useEffect(() => {

    //Get external and internal api and change loading status

    const getData = async () => {
      let { Data } = await GetUsers(setInternalData)
      isLoadingExternal.current = false
    }
    const getDataFromPostMan = async () => {
      let { Data } = await GetUsersFromPostMan(setDataFromPostMan)
      isLoadingInternal.current = false


    }

    getDataFromPostMan()
    getData()

  }, [])

  console.log(InternalData)
  //Conditional render by loading status
  if (!isLoadingExternal.current && !isLoadingInternal.current) {

    //create own table and external table 
    return (
      <div className={styles.mainContainer}>
        <head>
          <meta name="apple-mobile-web-app-capable" content="yes" />

        </head>

        <h2>CopyAndSaveContacts 5.0</h2>

        <Table
          Internal={false}
          Data={DataFromPostMan}
          setData={setDataFromPostMan}
          setDataInternal={setInternalData}
          isLoading={isLoadingExternal}
        />

        <Table
          Internal={true}
          Data={InternalData}
          setData={setInternalData}
          isLoading={isLoadingInternal}
        />

      </div>
    )
  } else {

    return (

      <div>
        <Loader />
      </div>
    )
  }




}



