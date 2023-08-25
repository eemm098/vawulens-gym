import Header from '../../components/header/Header'
import Image from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'


import './contact.css'

function Contact() {
  return (
    <>
      <Header title='Get in Touch' image={Image}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ducimus magnam voluptates repellat praesentium nesciunt, eveniet autem perferendis laborum sapiente?
    </Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="/" target="_blank" rel="noopener noreferrer"><MdEmail/></a>
            <a href="/" target="_blank" rel="noopener noreferrer"><BsMessenger/></a>
            <a href="/" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp/></a>
          </div>
        </div>
    </section>
    </>
  )
}

export default Contact
