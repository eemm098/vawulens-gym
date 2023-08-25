import Header from '../../components/header/Header'
import Image from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'
import './plans.css'

function Plans() {
  return (
    <>
      <Header title='Membership Plans' image={Image} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus alias quis ipsam possimus ad esse molestias commodi excepturi veniam officia.
      </Header>
      <section className="plans">
        <div className="container plans_container">
          {plans.map(({ id, name, desc, price, features }) => {
            return <Card key={id}  className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1> {`$${price}`}</h1><h2>/mo</h2>
              <h4>features</h4>
              {
                features.map(({ feature, available }, index) => {
                  return <p key={index} className={!available ? ' disabled' : '' }>{feature}</p>
                })
              }
              <button className='btn lg'>choose plan</button>
             </Card>
          })}
        </div>
      </section>
    </>
  )
}

export default Plans
  