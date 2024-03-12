import React from 'react'
import './style/selector_card.css'

function Selector_card(props: {category: string, page: string}) {
  return (
    <a href={`./${props.page}`} className="uiverse">
       <div className="wrapper">
        <span>{props.category}</span>
        <div className="circle circle-12"></div>
        <div className="circle circle-11"></div>
        <div className="circle circle-10"></div>
        <div className="circle circle-9"></div>
        <div className="circle circle-8"></div>
        <div className="circle circle-7"></div>
        <div className="circle circle-6"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-1"></div>
    </div>
    </a>
  )
}

export default Selector_card