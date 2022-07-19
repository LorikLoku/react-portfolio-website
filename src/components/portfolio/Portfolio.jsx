import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.png"
import IMG4 from "../../assets/portfolio4.png"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.png"


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Wordpress Crypto Website",
    github: "https://github.com/LorikLoku/wordpress-crypto.git",
    demo: "#",
  },
  {
    id: 2,
    image: IMG2,
    title: "PHP Balcanic Guide",
    github: "https://github.com/LorikLoku/php-explore-balkan.git",
    demo: "#",
  },
  {
    id: 3,
    image: IMG3,
    title: "PHP Pizza Website",
    github: "https://github.com/LorikLoku/php-xpizza.git",
    demo: "#",
  },
  {
    id: 4,
    image: IMG4,
    title: "VueJS Blog Post",
    github: "https://github.com/LorikLoku/vuejs-fireblogs.git",
    demo: "#",
  },
  {
    id: 5,
    image: IMG5,
    title: "NodeJS User Management",
    github: "https://github.com/LorikLoku/nodejs-user-management-system.git",
    demo: "#",
  },
  {
    id: 6,
    image: IMG6,
    title: "Wordpress e Commerce",
    github: "https://github.com/LorikLoku/wordpress-e-commerce.git",
    demo: "#",
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>  
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>  
            )
          })
        }                            
      </div>
    </section>
  )
}

export default Portfolio