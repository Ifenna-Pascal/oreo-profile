import { results } from '@src/__mockdata__'
import React from 'react'
import Results from './results'

const Numbering = () => {
  return (
    <div className='bg-secondary-200 w-full flex md:flex-row flex-col items-center py-8 md:py-0 min-h-[250px]'>
      <div className='centered-main-container w-full flex md:flex-row flex-col items-center justify-around'>
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