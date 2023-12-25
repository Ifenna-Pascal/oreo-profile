import React from 'react'
import { Department, HeroHeader } from '../components'
import { depts } from '@src/__mockdata__'
import { Choice } from '../(public)'

const Departments = () => {
  return (
    <div>
          <HeroHeader header1='Oreo Hospital' header2='Departments' image='dept-bg' />
    <div className='py-16 centered-main-container grid-cols-1 grid gap-y-8 px-5 md:px-0 md:grid-cols-3 gap-8'>
    {depts.map((team, index) => (
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