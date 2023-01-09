import React, { useEffect, useState } from 'react'
import Loading from '../components/UI/Loading/Loading'
import App from '../App'
import FileImport from '../components/FileImport'
import Search from '../components/Search'
import ListView from '../components/ListView'
import '../styles/pages/home.css';

type Props = {}

export const Home = (props: Props) => {
  const [data, setData] = useState<string[]>([])
  const [columns, setColumns] = useState<string>('');
  const [isUploaded, setIsUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState<boolean>(false)

  console.log({});

  useEffect(() => {


    return () => {

    }
  }, [data, isUploaded, isUploading])

  // TODO listing and filtering
  const filteredData = data
  const fileUploaded = data.length > 0
  return (
    <App>
      <div className='home'>
        <h1>Simple File Reader & Display</h1>
        <FileImport
          setData={setData}
          setColumns={setColumns}
          setIsUploaded={setIsUploaded}
          setIsUploading={setIsUploading}
        />
        <Search />
        <ListView
          fileUploaded={fileUploaded}
          data={filteredData}
          isUploading={isUploading}
          columns={columns}
        />
      </div>
    </App>
  )
}