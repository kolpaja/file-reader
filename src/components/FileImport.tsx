import React from 'react'
import { Input } from './Form/Input';

type Props = {
  setData: (value: string[]) => void;
  setColumns: (value: string) => void
  setIsUploaded: (value: boolean) => void
  setIsUploading: (value: boolean) => void
}

const FileImport = ({ setData, setColumns, setIsUploaded, setIsUploading }: Props) => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setIsUploading(true)
    if (e.target.files) {
      const reader = new FileReader()

      reader.onload = async (e) => {
        if (e.target!.result) {
          setIsUploaded(true)
          setIsUploading(false)
        }
        const res = (reader.result as string).split(/\r\n|\n/);
        setColumns(res[0])
        const dataArray = res.slice(1, res.length - 1)
        setData(dataArray)
      };
      reader.readAsText(e.target.files[0]);
      reader.onerror = (e: any) => {
        setIsUploaded(false)
        setIsUploading(false)
        alert(e.target.error.name)
      };
    } else {
      setIsUploaded(false)
      setIsUploading(false)
    }
  }

  return (
    <div>
      <Input
        label='Upload a file'
        type='file'
        onChange={onChange}
      />
    </div>
  )
}

export default FileImport