import React from 'react'
import './testimonials.scss'
import AVTR1 from '../../assets/testimonial.png'

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Mr Happy Client',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi molestias ipsa voluptatem dolores sequi corporis, aliquam, eligendi animi eos veniam eaque tempore aspernatur asperiores culpa adipisci commodi facilis repellat!'
  },
  {
    avatar: AVTR1,
    name: 'Mr Awersome Client',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi molestias ipsa voluptatem dolores sequi corporis, aliquam, eligendi animi eos veniam eaque tempore aspernatur asperiores culpa adipisci commodi facilis repellat!'
  },
  {
    avatar: AVTR1,
    name: 'Mr Client',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi molestias ipsa voluptatem dolores sequi corporis, aliquam, eligendi animi eos veniam eaque tempore aspernatur asperiores culpa adipisci commodi facilis repellat!'
  },
  {
    avatar: AVTR1,
    name: 'Mrs Pretty Client',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi molestias ipsa voluptatem dolores sequi corporis, aliquam, eligendi animi eos veniam eaque tempore aspernatur asperiores culpa adipisci commodi facilis repellat!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
      
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials