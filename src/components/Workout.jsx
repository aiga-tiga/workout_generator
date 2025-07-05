import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExersiceCard from './ExersiceCard' // Make sure this name is correct

export default function Workout(props) {
  const { workout } = props

  return (
    <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'Danger', 'zone']}>
      <div className='flex flex-col gap-4'>
        {workout.map((exercise, i) => (
          <ExersiceCard i={i} exercise={exercise} key={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}


