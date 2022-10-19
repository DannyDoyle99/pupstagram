import React from 'react'
import {useState, useEffect}  from 'react'

const Feed = ({dogs, breed}) => {

  return (
    <div className='grid grid-cols-5 gap-5 items-center container mx-auto m-5'>
        {dogs.map((dog, index) => {
            return (
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="object-cover h-96 w-96 "  src={dog} alt="dog" />
              </div>
            )
        })}
    </div>
  )
}

export default Feed