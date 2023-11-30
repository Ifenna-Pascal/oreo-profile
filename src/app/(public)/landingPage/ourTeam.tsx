import { teams } from '@src/__mockdata__'
import { Heading, Team } from '@src/app/components'
import React from 'react'

export const OurTeam = () => {
  return (
    <div className='py-20 centered-main-container w-full'>
        <Heading title1='Meet' title2='Our Team' content='Quick Description text here...' />
        <div className='py-6 grid grid-cols-4 gap-5'>
          {teams.slice(0,4).map((team, index) => (
            <Team key={index} img={team.img.src} name={team.name} position={team.position} />
          ))}
        </div>
    </div>
  )
}
