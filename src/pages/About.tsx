import React from 'react'
import developerImg from '../assets/imgs/developer.jpg'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='about'>

      <div className="left">
        <img src={developerImg} alt='developer' />
      </div>
      <div className="right">
        <h1>About me: Sokol Paja</h1>
      </div>


    </div>
  )
}

export default About