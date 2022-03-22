import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Sketch</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>InVision Studio</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Zeplin</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Balsamiq</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Figma</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Adobe XD</p>
            </li>

          </ul>
        </article>
        {/* ========== END OF UI/UX ================ */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Node.JS</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Web AR</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Flutter</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Advance Algorithms</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>MongoDB</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Progressive Web Apps (PWAs)</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>AI Chatbots</p>
            </li>

          </ul>
        </article>
        {/* ========== END OF WEB DEVELOPMENT ================ */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Sales Funnels</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>SEO and Research</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Data Analysis</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Google Analytics</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Adobe Creative Cloud</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Vimeo, Canva, Wipster</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon' />
              <p>Machine-generated Content</p>
            </li>

          </ul>
        </article>
        {/* ========== END OF CONTENT CREATION ================ */}

      </div>

    </section>
  )
}

export default Services