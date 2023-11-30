import { results } from '@src/__mockdata__'
import React from 'react'
import Results from './results'

const Numbering = () => {
  return (
    <div className='bg-secondary-200 w-full flex items-center  h-[250px]'>
      <div className='centered-main-container w-full flex items-center justify-around'>
        {
          results.map((result, index) => (
            <Results key={index} value={result.value} icon={result.icon} text={result.text} />
          ))
        }
      </div>
    </div>
  )
}

export default Numbering