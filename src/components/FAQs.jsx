import Section_header from "./Section_header"
import {FaQuestion} from 'react-icons/fa'
import { faqs } from "../data"
import FAQ from "./FAQ"


function FAQs() {
  return (
      <section className="faqs">
          <div className="container faqs_container">
              <Section_header icon={<FaQuestion />} title='FAQs' />
              <div className="faqs_wrapper">
                  {
                      faqs.map(({ id, question, answer }) => {
                          return <FAQ  question={question} answer={answer}  key={id}/>
                      })
                  }
              </div>
          </div>  
   </section>
  )
}

export default FAQs
