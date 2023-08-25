import { useState } from "react"
import Section_header from "./Section_header"
import { ImQuotesLeft } from 'react-icons/im'
import Card from "../UI/Card"
import { testimonials } from "../data"
import {IoIosArrowDropleftCircle , IoIosArrowDroprightCircle} from 'react-icons/io'



const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const { name, quote, job, avatar } = testimonials[index];

    const prevHandler = () => {
        setIndex(prev => prev - 1);

        if (index <= 0) {
            setIndex(testimonials.length - 1)
        }
    }

    const nextHandler = () => {
        setIndex(prev => prev + 1);

        if (index >= testimonials.length - 1) {
            setIndex(0)
        }
    }


    return (
      <section className='testimonials'>
          <div className="container test_container">
              <Section_header icon={<ImQuotesLeft />} title='Testimonials' className='testimonials_head' />
              <Card className='testimonials'>
                  <div className="testimonials_avatar">
                      <img src={avatar } alt={name} />
                    </div>
                    <p className="testimonials_quote">
                        {`"${quote}"`}
                    </p>
                    <h5>{name}</h5>
                    <small className="testimonials_title">{job}</small>
                </Card>
                <div className="testimonials_btn_container">
                    <div className="testimonials_btn" title="back" onClick={prevHandler}><IoIosArrowDropleftCircle/></div>
                    <div className="testimonials_btn" title="forward" onClick={nextHandler} ><IoIosArrowDroprightCircle/></div>
                </div>
          </div>
    </section>
  )
}

export default Testimonials
