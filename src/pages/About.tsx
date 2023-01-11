import { useEffect, useState } from 'react'
import App from '../App'
import Loading from '../components/UI/Loading/Loading'
import '../styles/pages/about.css'

type Props = {}

const getAge = (birthday: string) => {
  const currYear = new Date().getFullYear()
  const birthYear = new Date(birthday).getFullYear()
  return currYear - birthYear
}

const About = (props: Props) => {
  const [developer, setDeveloper] = useState<any>()

  const getDeveloper = async () => {
    await fetch('https://developers-api-service.onrender.com/api/developers/1?populate=*')
      .then(res => res.json())
      .then(data => setDeveloper(data))

  };

  useEffect(() => {
    getDeveloper();
  }, []);

  return (
    <App>
      <h3>About me!</h3>
      {
        developer ?
          <div className='about'>
            <div className="left">
              <img src={developer.data.attributes.cover_img.data.attributes.url} alt='' width={300} height={300} />

              <span className='full-name'>
                {developer.data.attributes.first_name} {developer.data.attributes.last_name}
              </span>

              <span>
                {developer.data.attributes.job}, {getAge(developer.data.attributes.birthday)}
              </span>
            </div>
            <div className="right">
              <p>{developer.data.attributes.bio}</p>
            </div>
          </div>
          : <Loading />
      }
    </App>
  )
}

export default About