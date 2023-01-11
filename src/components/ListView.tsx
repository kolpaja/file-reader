import { useEffect } from 'react'
import Loading from './UI/Loading/Loading';
import logo from '../assets/icons/filesIcon.jpg';
import { startCase } from 'lodash';
import '../styles/components/listview.css';
import { FixedSizeList as List } from 'react-window';

type Props = {
  data: any;
  fileUploaded: boolean;
  isUploading: boolean;
  columns: string;
}

const ListView = ({ data, fileUploaded, isUploading, columns }: Props) => {

  useEffect(() => {
  }, [isUploading])

  // TODO listing and filtering
  if (!fileUploaded && !isUploading) return (
    <div>
      <h3>Upload any .txt file to show the list below</h3>
      <img src={logo} alt='files list texts' width={450} height={350} />
    </div>
  )
  const Row = ({ index, style }: any) => {
    return (
      <div className='item' style={style}>
        <span>{index + 1}{') '}</span>
        {data[index].split(',').map((item: string) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    )
  };

  return (
    <div className='list-view'>
      {
        isUploading ? <Loading />
          :
          <>
            <div className='caption'>
              Listing: {data.length > 0 ? data.length.toLocaleString() : 0} records.
            </div>

            <div className='list'>
              {data.length > 0 ?
                <>
                  <header className='cols'>
                    <span className='first'>
                      Nr.
                    </span>
                    {columns.split(',').map((col: string) => (
                      <span key={col} className='col-item'>
                        {startCase(col)}
                      </span>
                    ))}
                  </header>
                  <List
                    className='list-scroll'
                    width={'100%'}
                    height={700}
                    itemCount={data.length}
                    itemSize={30}
                  >
                    {Row}
                  </List>
                </>
                :
                <div>
                  no data found
                </div>
              }
            </div>
          </>
      }
    </div >
  )
}

export default ListView