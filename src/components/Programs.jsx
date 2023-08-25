import React from 'react'
import Section_header from '../components/Section_header'
import { FaCrown } from 'react-icons/fa'
import { programs } from '../data'
import { Link } from 'react-router-dom'
import Card from '../UI/Card'
import {AiFillCaretRight} from 'react-icons/ai'

function Programs() {
  return (
      <section className="programs">
          <div className="container programs_container">
              <Section_header icon={<FaCrown/> } title='Programs' />
        
          <div className="Programs_wrapper">
              {
                  programs.map(({ id, icon, title, info, path }) => {
                      return (
                          <Card className='program_card' key={id}>
                              <span>{icon}</span>
                              <h4>{title}</h4>
                              <small>{info}</small>
                              <Link to={path} className='btn sm' title='program link'> learn more <AiFillCaretRight/></Link>
                          </Card>
                      )
                  })
              }
              </div>
              </div>
    </section>
  )
}

export default Programs
