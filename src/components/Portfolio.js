import React from 'react'
import { portfolio } from '../Data'
import "./Portfolio.css"
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return (
    <><section className="section_portfolio">
      <h2 className='section_title'> My <span>Portfolio</span></h2>
      <div className='portfolio_container container grid'>
        {portfolio.map((item)=>{
          return <><PortfolioItem key={item.id} {...item}/></>
        })}
      </div>
    </section>
    </>
    )
}

export default Portfolio