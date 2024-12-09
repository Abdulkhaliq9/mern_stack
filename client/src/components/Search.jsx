import React from 'react'

export default function Search() {
  return (
   <form role="search" className="mb-4 md:flex md:flex-wrap md:justify-between input-group">
  <div className="h-[45px] border-[#dfdfdf] border rounded overflow-hidden flex">
    <label htmlFor="userInput" className="sr-only">Search</label>
    <input type="search" name="q" autoComplete="on" className="px-4  w-[600px] h-[45px] py-2" id="userInput" placeholder="Search" size={30} />
    <button className="flex items-center h-[45px] bg-purple text-white justify-center px-4 border-l">
      Search
    </button>
  </div>
</form>

  )
}
