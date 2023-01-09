import React from 'react'
import Loading from './UI/Loading/Loading';
import logo from '../assets/icons/filesIcon.jpg';

type Props = {
  data: string[];
  fileUploaded: boolean;
  isUploading: boolean;
  columns: string;
}

const ListView = ({ data, fileUploaded, isUploading, columns }: Props) => {
  console.log({ data, fileUploaded, isUploading, columns })

  // TODO listing and filtering
  if (!fileUploaded) return (
    <div>
      <h3>Upload any .txt file to show the list below</h3>
      <img src={logo} alt='files list texts' width={450} height={350} />
    </div>
  )


  return (
    <div className='list-view'>
      {
        isUploading ? <Loading />
          :
          <div className='list'>
            {data.length > 0 ?
              <div>data s</div>
              :
              <div>
                no data found
              </div>
            }
          </div>
      }
    </div>
  )
}

export default ListView