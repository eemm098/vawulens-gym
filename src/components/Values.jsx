import Section_header from '../components/Section_header'
import { values } from '../data'
import { GiCutDiamond } from 'react-icons/gi'
import Card from '../UI/Card'
import Image from '../images/values.jpg'
function Values() {
  return (
    <section className='values'>
      <div className="container values_container">
        <div className="values_left">
          <div className="values_image">
            <img src={Image} alt="values section image" />
          </div>
      </div>
        <div className="values_right">
          <Section_header icon={<GiCutDiamond />} title='Values' />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae hic blanditiis ratione consectetur optio odit delectus est fuga totam perspiciatis?</p>
          <div className="values_wrapper">
            {
              values.map(({ id, icon, title, desc }) => {
                return <Card className='value_card' key={id}>
                  <span>{icon }</span>
                  <h4> {title} </h4>
                <small>{desc} </small>
                </Card>
              })
            }
          </div>
      </div>
      </div>
    </section>
  )
}

export default Values
