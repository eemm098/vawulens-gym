import Header from '../../components/header/Header'
import Image from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import Trainer from '../../components/Trainer'

import './trainers.css'

function Trainers() {
  return (
    <>
      <Header title='Trainers' image={Image}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, non temporibus possimus vitae magni nostrum labore provident quasi a incidunt.
      </Header>
      <section className="trainers">
        <div className="container trainers_container">
          {
            trainers.map(({ id, image, name, job, socials }) => {
              return <Trainer key={id} image={image} name={name} job={job} socials={[
                {icon : <BsInstagram/> , link : socials[0]},
                {icon : <AiOutlineTwitter/> , link : socials[1]},
                {icon : <FaFacebookF/> , link : socials[2]},
                {icon : <FaLinkedinIn/> , link : socials[3]}

              ]} />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers
  