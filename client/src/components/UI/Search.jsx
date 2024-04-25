import React from 'react'
import Input from './Input'
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return (
    <div
            className={`max-w-56 
          overflow-hidden 
          flex 
          relative 
          justify-end 
          items-center 
          gap-2 
          border-gray-400 
          border-px 
          rounded-md`}
          >
            <Input
              type={"text"}
              className={
                "w-full bg-inherit focus:outline-none text-right text-base py-1"
              }
              placeholder="Search"
            />
            <CiSearch size={30} className={`p-1`} />
          </div>
  )
}

export default Search