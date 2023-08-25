import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import { useState } from 'react'
const FAQ = ({ question, answer }) => {
    
    const [isAnswerShow, setIsAnswerShow] = useState(false)
    
  return (
      <article className="faq" onClick={() => setIsAnswerShow((prev => !prev))}>
          <div>
              <h4>{question}</h4>
              <button className="faq_icon" title=''  >
                  {
                      isAnswerShow ? <AiOutlineMinus/> : <AiOutlinePlus />
                  }
              </button>
          </div>
          {
              isAnswerShow &&  <p>
              {answer}
          </p> 
         }
   </article>
  )
}

export default FAQ
