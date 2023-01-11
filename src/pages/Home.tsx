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
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
  }, [data, isUploaded, isUploading, search])

  // TODO listing and filtering
  const filteredData = data.filter(item => item.split(',').slice(0, 4).join().toLowerCase().includes(search.toLocaleLowerCase()))
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

        <Search setSearch={setSearch} />

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