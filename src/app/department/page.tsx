import React from 'react'
import { Department, HeroHeader } from '../components'
import { teams } from '@src/__mockdata__'
import { Choice } from '../(public)'

const Departments = () => {
  return (
    <div>
          <HeroHeader header1='Oreo Hospital' header2='Departments' />
    <div className='py-16 centered-main-container grid grid-cols-3 gap-6'>
    {teams.map((team, index) => (
      <Department key={index} img={team.img.src} name={'CARDIOLOGY'} position={'How all this mistaken al idea of denouncing pleasure praisings pain'} />
    ))}
  </div>
  <Choice />
  <br />
  <br />
    </div>
  )
}

export default Departments