import React, { useCallback, useEffect, useState } from 'react'
import { Input } from './Form/Input';
import { debounce } from 'lodash'
import '../styles/components/search.css'

type Props = {
  setSearch: (value: string) => void;
  search?: string;
}

const Search = ({ setSearch }: Props) => {
  const [value, setValue] = useState('');

  const debounceFn = useCallback(debounce((val) => setSearch(val), 50), [value]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    debounceFn(e.target.value)
  }

  return (
    <div className='search'>
      <h5>Search List</h5>
      <Input
        onChange={handleChange}
        value={value}
        placeHolder='filter by name, surname, street, city'
        cls='search-input'
        type='text'
      />
      {/*TODO icon search */}
    </div>
  )
}

export default Search