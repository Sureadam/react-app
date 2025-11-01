import React from 'react'
import { categories } from '../data/data'
import { data } from '../data/data'

const Category = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-orange-600 text-bold text-4xl text-center'>Top Rated Menu Items</h1>


      {/* categories */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
        {
          categories.map((items, index) => (
            <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
              <h2 className='font-bold sm:text-xl '>{items.name}</h2>
              <img src={items.image} alt={items.name} />
            </div>
          ))
        }
      </div>   
    </div>
  )
}

export default Category