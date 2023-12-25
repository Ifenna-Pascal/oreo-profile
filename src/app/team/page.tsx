import React from 'react'
import { Heading, HeroHeader, Team } from '../components'
import { teams } from '@src/__mockdata__'


const OurTeam = () => {
  return (
    <div>
      <HeroHeader header1='Our' header2='Specialist' image='team-bg' />
      <div className='px-5 md:px-0 md:centered-main-container pt-16 pb-8'>
      <Heading title1='Meet' title2='Our Team' content='Quick Description text here...' />
      <div className='py-6 grid grid-cols-1 gap-y-6 md:grid-cols-3 gap-5'>
          {teams.map((team, index) => (
            <Team key={index} img={team.img.src} name={team.name} position={team.position} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeam