import React from 'react'
import { Heading, HeroHeader } from '../components'
import FaqCard from '../components/card/faqCard'

const Faqs = () => {
  return (
    <div>
        <HeroHeader header1='Oreo' header2='FAQs' image='faq-bg' />
        <div className='centered-main-container py-16'>
        <Heading title1='Oreo' title2='Faqs' content='Quick Description text here...' />
        <div className='py-3'>
            {[1,2,3,4].map((question, key) => (
                <FaqCard 
                    key={key}
                    question='Using This Dedicated Purpose Theme?'
                    answer='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                />
            ))}
        </div>
        </div>
    </div>
  )
}

export default Faqs