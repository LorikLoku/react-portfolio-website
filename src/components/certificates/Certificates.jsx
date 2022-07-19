import React from 'react'
import './certificates.css'
import IMG1 from "../../assets/certificate1.jpg";
import IMG2 from "../../assets/certificate2.jpg";
import IMG3 from "../../assets/certificate3.jpg";

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

const data = [
  {
    id: 1,
    image: IMG1,
    alt: "Certificate One",
  },
  {
    id: 2,
    image: IMG2,
    alt: "Certificate Two",
  },
  {
    id: 3,
    image: IMG3,
    alt: "Certificate Three",
  },
];

const Certificates = () => {
  return (
    <section id='certificates'>
      <h5>What I've Been Through</h5>
      <h2>Certificates</h2>

      <Swiper navigation={true} className="container certificates__container"
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}   
      >
        {
          data.map(({id, image, alt}) => {
            return (
              <SwiperSlide key={id} className="certificate">
                <div className="certificate__image">
                  <img src={image} alt={alt} />
                </div>
              </SwiperSlide>
            );
          })
        }                         
      </Swiper>
    </section>
  )
}

export default Certificates;