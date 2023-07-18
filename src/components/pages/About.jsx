import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"
import img1 from '../../asstes/img/abrar.png'

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={img1} width="90%" alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button>Download CV</button>
                <button className='primaryBtn'>Download CV</button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
