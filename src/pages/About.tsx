import React from 'react'
import developerImg from '../assets/imgs/developer.jpg'
import App from '../App'

type Props = {}

const About = (props: Props) => {
  // TODO add img fix, my bio and downloadble updated cv
  return (
    <App>
      <div className='about'>

        <div className="left">
          <img src={developerImg} alt='developer' />
        </div>
        <div className="right">
          <h1>About me: Sokol Paja</h1>
        </div>
      </div>
    </App>
  )
}

export default About